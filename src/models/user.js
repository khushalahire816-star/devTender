const mongoose = require("mongoose");
var validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 20,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowcase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new error("This is not valid email id" + value);
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isStrongPassword(value)) {
          throw new error("This is not valid email id" + value);
        }
      },
    },
    age: {
      type: Number,
      min: 18,
    },
    gender: {
      type: String,
      validate(value) {
        if (!["male", "female", "other"].includes(value)) {
          throw new error("This is not valid gender data..");
        }
      },
    },
    photoUrl: {
      type: String,
      default: "https://wallpapercave.com/wp/wp1993634.jpg",
    },
    about: {
      type: String,
      default: "This is test of default schema type..",
    },
    skill: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

module.exports = User;