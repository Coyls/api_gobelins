import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./schemas//typeDefs";
import express from "express";
import dbConfig from './dbConfig'



const startServer = async () => {
  const app = express();
  app.use(express.json())

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  dbConfig

  server.applyMiddleware({ app });


  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
