import { gql } from "apollo-server-core";

export const userTypeDefs = gql`
  extend type Query {
    user(name: String): User!
    list: [List!]!
  }

  type Friends {
    _id: ID!
    index: Float!
    picture: String!
    age: Float!
    eyeColor: String!
    name: String!
    company: String!
    email: String!
    phone: String!
  }

  type List {
    _id: ID!
    index: Float!
    picture: String!
    age: Float!
    eyeColor: String!
    name: String!
    company: String!
    email: String!
    phone: String!
    friends: [Friends!]!
    greeting: String!
  }
  type User {
    _id: ID!
    index: Float!
    picture: String!
    age: Float!
    eyeColor: String!
    name: String!
    company: String!
    email: String!
    phone: String!
  }
`;
