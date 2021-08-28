const { gql } = require('apollo-server-express');

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`

`;

export const SAVE_BOOK = gql`

`;

export const REMOVE_BOOK = gql`

`;