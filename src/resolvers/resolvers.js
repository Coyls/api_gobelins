import { Project, User } from "../models/Project";
import { hash, genSalt, compare } from "bcrypt"

export const resolvers = {
  Query: {
    hello: () => "hi",
    projects: () => Project.find(),
    users: () => User.find(),
    /* login: async (_, { email, password }) => {

      const user = User.find(user => user.email === email)

      if (user === null) {
        console.log('Ya une erreur')
        return { succes: "Oula" }
      }

      try {
        if (await compare(password, User.password)) return { succes: "Succes" }
        else return { succes: "Nope" }
      } catch (error) {
        console.log(error)

      }



    } */
  },


  Mutation: {
    createProject: async (_, { name }) => {
      const project = new Project({ name })
      await project.save()
      return project
    },

    createUser: async (_, { firstName, lastName, email, password }) => {
      try {
        const salt = await genSalt()
        const hashedPassword = await hash(password, salt)
        const user = new User({ firstName, lastName, email, password: hashedPassword })
        await user.save()
        return user
      } catch (error) {
        console.log(error)
      }
    }
  }
};
