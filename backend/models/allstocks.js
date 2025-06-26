import mongoose from "mongoose";

const stocklistSchema = new mongoose.Schema({
    name: String,
    price: Number,
    percent : String,
    isDown : Boolean
})

const Stocklist = mongoose.model("Stocklist",stocklistSchema);

export default Stocklist