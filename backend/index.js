import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Holding from "./models/holding.js";
import cors from "cors";
import Order from "./models/order.js";
import Position from "./models/position.js";
import Stocklist from "./models/allstocks.js";
import User from "./models/user.js";
import MongoStore from "connect-mongo";
import session from "express-session";
import passport from "passport";
import LocalStrategy from "passport-local";

import { stocklist, watchlist } from "../frontend/src/data/data.js";




const app = express();
const port = process.env.port || 8080;
const mongoUrl = process.env.MONGO_URL;

app.use(cors({
  origin: "https://tradetracker-7b5i.onrender.com",
  credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//MongoStore
const store = MongoStore.create({
  mongoUrl: mongoUrl,
  crypto: {
    secret: process.env.SECRET
  },
  touchAfter : 7*24*60*60*1000,
})

//Session
const sessionOptions = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "none",
    secure: true
  }
};
app.use(session(sessionOptions));




//Passport - Authentication and Authorization

app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy

passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.post("/signup", async (req, res, next) => {
  try {
    console.log("Signup request body:", req.body);
    const { username, password } = req.body;
    const user = new User({ username });
    await User.register(user, password);

    // Automatically login after signup
    req.login(user, (err) => {
      if (err) return next(err);
      return res.send({ success: true, user });
    });
  } catch (err) {
    console.error("Signup error:", err.message);
    return res.status(400).send({ success: false, message: err.message });
  }
});


app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      // Login failed
      return res.status(401).json({
        success: false,
        message: info?.message || "Invalid username or password",
      });
    }

    // Log in the user
    req.login(user, (err) => {
      if (err) return next(err);
      return res.json({ success: true, user });
    });
  })(req, res, next);
});


app.get('/check-auth', (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ loggedIn: true ,user : req.user });
  } else {
    res.json({ loggedIn: false });
  }
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      res.send({success : false})
    }
    res.send({success : true});
  });
});

app.get("/allStocks", async (req,res)=>{
  try{
     const stocks = await Stocklist.find();
     res.send({success : true , stocks});
  }
  catch(err){
    res.send({success:false});
  }
});


app.get("/getwatchlistdata",async (req,res)=>{
    try {
    const user = await User.findById(req.user._id).populate("watchlist");
    res.send({ success: true, watchlist: user.watchlist });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: "Failed to fetch watchlist" });
  }
});

app.post("/addToWatchlist", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }

  User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { watchlist: req.body.stock._id } }, 
    { new: true } 
  )
    .then(() => {
      res.send({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ success: false, error: err.message });
    });
});

app.post("/removeFromWatchlist", (req, res) => {

  if (!req.user) {
    return res.status(401).send({ success: false, message: "Not authenticated" });
  }

  User.findByIdAndUpdate(
    req.user._id,
    { $pull: { watchlist:  req.body.stock._id } },
    { new: true }
  )
    .then(() => res.send({ success: true }))
    .catch((err) => {
      console.error("Error removing from watchlist:", err);
      res.status(500).send({ success: false });
    });
});

app.get("/getholdingdata",async (req,res)=>{
    try {
    const user = await User.findById(req.user._id).populate("holdings.stock");
    console.log(user);
    res.send({ success: true, holdings: user.holdings });
  } catch (err) {
    console.error(err);
    res.status(500).send({ success: false, message: "Failed to fetch holdings" });
  }
});

app.post("/addToHoldings", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({ success: false, message: "Unauthorized" });
  }

  let holdingStock = {
    stock :  req.body.stock._id,
    quantity :  req.body.qty,
    mode : req.body.mode
  }
  console.log(holdingStock);

  User.findByIdAndUpdate(
    req.user._id,
    { $addToSet: { holdings : holdingStock } }, 
    { new: true } 
  )
    .then(() => {
      console.log("Inserted");
      res.send({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ success: false, error: err.message });
    });
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


app.listen(port, () => {
  console.log("App is listening");
});

mongoose
  .connect(mongoUrl)
  .then((res) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
