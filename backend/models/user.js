import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
    watchlist : [{
        type : mongoose.Schema.ObjectId,
        ref : "Stocklist"
    }],

    holdings : [{
        stock : {
            type : mongoose.Schema.ObjectId,
            ref : "Stocklist"
        },
        quantity : {
            type : Number
        },
        mode : {
            type : String
        }
    }]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User" , userSchema);

export default User;