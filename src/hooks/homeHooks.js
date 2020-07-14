import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER_QUERY } from '../apollo/actions/user';
import { clearLocalStorageTokens } from '../utils/tokensHelper';
import { LOGIN_ROUTE } from '../utils/routesNavigationConstants';

const useHomeHook = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(GET_CURRENT_USER_QUERY);

  console.log({ loading, error, data });

  const logoutHandler = useCallback(() => {
    clearLocalStorageTokens();

    history.push(LOGIN_ROUTE);
  }, [history]);

  return {
    logoutHandler
  };
};

export default useHomeHook;
