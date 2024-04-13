const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect("mongodb://127.0.0.1:27017/pintrest-clone");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  password: String,
  email: String,
  profileImage: String,
  contact: Number,
  boards: { type: Array, default: [] },
  post: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);
