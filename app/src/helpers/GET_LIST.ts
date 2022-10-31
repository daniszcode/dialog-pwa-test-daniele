import gql from "graphql-tag";

export const GET_LIST = gql`
  query {
    list {
      _id
      name
      index
      picture
      age
      company
      email
      phone
      friends {
        _id
        index
        picture
        age
        company
        email
        phone
      }
      greeting
    }
  }
`;
