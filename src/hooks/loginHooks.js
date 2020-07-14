import { useState } from 'react';
import * as R from 'ramda';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER_MUTATION } from '../apollo/actions/user';
import { HOME_ROUTE } from '../utils/routesNavigationConstants';
import { setLocalStorageTokens } from '../utils/tokensHelper';
import { getResponseBody } from '../utils/helper';

export const useLoginHook = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  const [login, { loading }] = useMutation(LOGIN_USER_MUTATION);

  const goto = (path) => history.push(path);

  const onSubmit = async (event) => {
    event.preventDefault();

    const { username, password } = formValues;

    try {
      const response = await login({ variables: { username, password } });
      const responseData = getResponseBody(response);

      console.log('$$$$ responseData', responseData);

      setLocalStorageTokens({
        accessToken: R.pathOr('', ['login', 'accessToken'], responseData),
        username: R.pathOr('', ['login', 'user', 'username'], responseData)
      });

      goto(HOME_ROUTE);
    } catch (error) {
      const errorMessage = R.pathOr(
        'Something Wrong Happened',
        ['message'],
        error.graphQLErrors[0]
      );

      console.log(errorMessage);
    }
  };

  const onChangeFormValues = (event) =>
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });

  return {
    loading,
    formValues,
    onChangeFormValues,
    onSubmit,
    goto
  };
};
