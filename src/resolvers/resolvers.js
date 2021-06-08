import { Project, User } from "../models/Project";

export const resolvers = {
  Query: {
    hello: () => "hi",
    projects: () => Project.find(),
    users: () => User.find()
  },


  Mutation: {
    createProject: async (_, { name }) => {
      const project = new Project({ name })
      await project.save()
      return project
    },

    createUser: async (_, { firstName, lastName, email }) => {
      const user = new User({ firstName, lastName, email })
      await user.save()
      return user
    }
  }
};
