import { useState } from 'react';
import * as R from 'ramda';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { SIGNIN_USER_MUTATION } from '../apollo/actions/user';
import { LOGIN_ROUTE } from '../utils/routesNavigationConstants';

export const useSignupHook = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
    name: ''
  });

  const [signup, { loading }] = useMutation(SIGNIN_USER_MUTATION);

  const goto = (path) => history.push(path);

  const onSubmit = async (event) => {
    event.preventDefault();

    const { username, password, name } = formValues;

    try {
      await signup({ variables: { username, password, name } });

      goto(LOGIN_ROUTE);
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
