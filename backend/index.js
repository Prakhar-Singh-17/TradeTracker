import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Holding from "./models/holding.js";
import cors from "cors";
import Order from "./models/order.js";
import Position from "./models/position.js";
import { positions, holdings } from "../dashboard/src/data/data.js";
const app = express();
const port = process.env.port || 8080;
const mongoUrl = process.env.MONGO_URL;

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("App is listening");
});

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await Holding.find();
    res.send({holdings , message : "Success"});
  } catch (err) {
    res.send({message : "Error Fetching Data"});
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await Position.find();
    res.send({positions , message : "Success"});
  } catch (err) {
    res.send({message : "Error Fetching Data"});
  }
});

app.post("/addOrder",(req,res)=>{
    let order = new Order(req.body);
    order.save()
    .then(console.log("Saved"))
    .catch((err)=>console.log(err));
})

// app.get("/addHoldings", (req, res) => {
//   Holding.insertMany(holdings)
//     .then(console.log("Inserted"))
//     .catch((err) => console.log(err));
// });

// app.get("/addPositions", async (req, res) => {
//     await Position.deleteMany({}).catch((err)=>console.log(err));
//   Position.insertMany(positions)
//     .then(console.log("Inserted"))
//     .catch((err) => console.log(err));
// });

mongoose
  .connect(mongoUrl)
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
