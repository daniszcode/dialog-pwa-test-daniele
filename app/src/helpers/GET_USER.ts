import gql from "graphql-tag";

export const GET_USER = gql`
 query User($name: String) {
  user(name: $name) {
    _id
    index
    picture
    age
    eyeColor
    name
    company
    email
    phone
    friends {
      _id
      index
      picture
      age
      eyeColor
      name
      company
      email
      phone
    }
  }
`;
