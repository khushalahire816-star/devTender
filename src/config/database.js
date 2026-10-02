const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ahirekhushal98_db_user:1Al7RPxQIn4jZdHG@khushal.cbd4gnp.mongodb.net/devTinder"
  );
};

module.exports = connectDB;