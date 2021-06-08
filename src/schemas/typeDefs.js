import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    projects: [Project!]!
    users: [User!]!
  }

  type Project {
    id: ID!
    name: String!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }

  type Mutation {
    createProject(name: String!): Project!
    createUser(firstName: String!, lastName: String!, email: String!): User!


  }
`;
