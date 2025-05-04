const { required } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"], // Allowed roles are only "admin" and "member"
    default: "user", // Default role is "member"
  },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
