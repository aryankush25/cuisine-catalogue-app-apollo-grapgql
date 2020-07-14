import { gql } from 'apollo-boost';

export const userDefaults = {
  userData: {},
  __typename: 'user'
};

export const GET_CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      name
      username
      cuisines {
        id
        name
        description
        created_at
        updated_at
        chef {
          id
          username
        }
      }
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        id
        name
        username
        cuisines {
          id
          name
          description
          created_at
          updated_at
          chef {
            id
            username
          }
        }
      }
      access_token
    }
  }
`;

export const SIGNIN_USER_MUTATION = gql`
  mutation SignUpUser($username: String!, $password: String!, $name: String!) {
    signup(username: $username, password: $password, name: $name) {
      message
    }
  }
`;

export const userResolvers = {};
