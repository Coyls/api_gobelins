import mongoose from "mongoose";


const projectSchema = mongoose.Schema({
    name: String
})

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    description: String
})


export const Project = mongoose.model("Project", projectSchema);
export const User = mongoose.model("User", userSchema)
