const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }
  type Query {
    users: [User]
    user(username: String!): User
    books: [Book]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(username: String, email: String, password: String!): Auth
    saveBook(bookId: String!, authors: [String]!, description: String!, title: String!, image: String!, link: String): User
    deleteBook(bookId: String!): User
  }
`;
//? do we need to require a some of the fields in saveBook?
//! saveBook(bookId: String!, image: String!, link: String!, title: String!, description: String!, authors: String!): Book
module.exports = typeDefs;