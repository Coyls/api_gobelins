import mongoose from "mongoose";

export const Project = mongoose.model("Project", { name: String });
