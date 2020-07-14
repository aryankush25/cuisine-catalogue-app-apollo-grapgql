import ApolloClient from 'apollo-boost';
import * as R from 'ramda';
import defaults from './defaults';
import resolvers from './resolvers';
import { getLocalStorageTokens } from '../utils/tokensHelper';

const nonProtectedOperations = ['LoginUser', 'SignUpUser', 'VerifyEmail'];

const createClient = () => {
  const client = new ApolloClient({
    uri: `${process.env.REACT_APP_APOLLO_CLIENT_URI}/graphql`,
    request: async (operation) => {
      const { accessToken } = getLocalStorageTokens();

      const { operationName } = operation;

      if (!R.includes(operationName, nonProtectedOperations)) {
        operation.setContext({
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        });
      }
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log({ graphQLErrors });
        // sendToLoggingService(graphQLErrors);
      }

      if (networkError) {
        console.log({ networkError });
        // logoutUser();
      }
    },
    clientState: {
      defaults,
      resolvers
    }
  });

  return client;
};

export default createClient();
