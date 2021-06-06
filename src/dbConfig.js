import mongoose from "mongoose";

export default mongoose.connect(
    process.env.DATABASE,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log("Mongodb Connected")
        else console.log(err.message)
    }
)
