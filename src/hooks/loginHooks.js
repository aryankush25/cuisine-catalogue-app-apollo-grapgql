import * as R from 'ramda';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER_MUTATION } from '../apollo/actions/user';
import { HOME_ROUTE } from '../utils/routesNavigationConstants';
import { setLocalStorageTokens } from '../utils/tokensHelper';
import { getResponseBody } from '../utils/helper';

export const useLoginHook = () => {
  const history = useHistory();

  const [login, { loading }] = useMutation(LOGIN_USER_MUTATION);

  const goto = (path) => history.push(path);

  const onSubmit = async ({ email, password }) => {
    try {
      const response = await login({ variables: { email, password } });
      const responseData = getResponseBody(response);

      setLocalStorageTokens({
        accessToken: R.pathOr('', ['login', 'accessToken'], responseData),
        userEmail: R.pathOr('', ['login', 'user', 'email'], responseData)
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

  return {
    loading,
    onSubmit,
    goto
  };
};
