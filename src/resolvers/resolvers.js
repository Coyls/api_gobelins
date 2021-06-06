import { Project } from "../models/Project";

export const resolvers = {
  Query: {
    hello: () => "hi",
    projects: () => Project.find()
  },
  Mutation: {
    createProject: async (_, { name }) => {
      const project = new Project({ name });
      await project.save();
      return project;
    }
  }
};
