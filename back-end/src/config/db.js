import mongoose from "mongoose";

export function connectDB(){
    mongoose.connect("mongodb://localhost:27017/Thehelperduck")
    .then(()=> console.log("MongoDB conectado"))
    .catch(err => console.error(err))
}