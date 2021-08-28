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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook ($bookId: String!, $title: String!, $authors: String!, $description: String!, $link: String!, $image: String!) {
    saveBook(bookId: $bookId, title: $title, authors: $authors, description: $description, link: $link, image: $image) {
      bookId,
      title,
      authors,
      description,
      link,
      image
    }
  }
`;

export const REMOVE_BOOK = gql`

`;