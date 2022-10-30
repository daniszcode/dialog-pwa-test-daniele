import { gql } from "apollo-server-core";
import { userResolvers } from "./user/resolvers";
import { userTypeDefs } from "./user/typedefs";

export const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

export const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];
