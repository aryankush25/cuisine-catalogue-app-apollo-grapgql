import { gql } from 'apollo-boost';

export const userDefaults = {
  userData: {},
  __typename: 'user'
};

export const GET_CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      is_email_verified
      email_verified_at
      location
      description
      website
      intent
      interests
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
        is_email_verified
        email_verified_at
      }
      access_token
    }
  }
`;

export const SIGNIN_USER_MUTATION = gql`
  mutation SignUpUser($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      message
    }
  }
`;

export const VERIFY_OTP_MUTATION = gql`
  mutation VerifyEmail($otp: String!, $type: String!, $email: String!) {
    verifyEmail(otp: $otp, type: $type, email: $email) {
      access_token
    }
  }
`;

export const userResolvers = {};
