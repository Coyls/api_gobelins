import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    projects: [Project!]!
  }

  type Project {
    id: ID!
    name: String!
  }

  type Mutation {
    createProject(name: String!): Project!
  }
`;
