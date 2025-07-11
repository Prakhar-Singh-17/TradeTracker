import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

const Position = mongoose.model("Position",positionSchema);

export default Position;