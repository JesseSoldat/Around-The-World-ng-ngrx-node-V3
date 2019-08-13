const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;
// helpers
const { daysFromNow } = require("../helpers/timeHelpers");
// test token
const tokenExpTime = 30 * 1000; // 30 seconds
// real token
const tokenExpDays = 7;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    avatar: {
      type: String
    },
    gender: {
      type: String
    },
    hometown: {
      type: String,
      default: "unknown"
    },
    birthDate: {
      type: Date
    },
    occupation: {
      type: String,
      default: "unknown"
    },
    role: {
      type: String,
      default: "user"
    },
    friends: {
      type: [String]
    }
  },
  { timestamps: true }
);

// generate an auth token
UserSchema.methods.generateAuthToken = async function() {
  const user = this;

  try {
    const { _id, username, role } = user;
    const exp = daysFromNow(tokenExpDays);

    const token = jwt
      .sign(
        {
          _id: _id.toString(),
          username,
          role,
          exp
        },
        process.env.TOKEN_SECRET
      )
      .toString();

    return { token };
  } catch (err) {
    return {
      err: "An error ocurred while trying to generate the auth token"
    };
  }
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
