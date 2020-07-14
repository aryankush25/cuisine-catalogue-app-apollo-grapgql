import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../../apollo';
import AppRoutes from '../../routes';

const AppBoot = () => {
  return (
    <ApolloProvider client={client}>
      <AppRoutes />
    </ApolloProvider>
  );
};

export default AppBoot;
