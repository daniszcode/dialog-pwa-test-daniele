import { ApolloServer } from "apollo-server";
import { context } from "./graphql/context";
import { resolvers, typeDefs } from "./graphql/schema";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4000).then(({ url }) => {
  console.log(`server listening to ${url}`);
});
