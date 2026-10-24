const jwt = require("jsonwebtoken");
const User = require("../models/user");

// const adminAuth = (req, res, next) => {
//   const token = "xzy";
//   const isAdminAuthorized = token === "xzy";
//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized..");
//   } else {
//     next();
//   }
// };

const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;
    const { token } = cookies;
    if (!token) {
      return res.status(401).send("Please Login..");
    }

    const decodedData = await jwt.verify(token, "Dev@Tinder@123");

    const { _id } = decodedData;
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User does not present..");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }


}

module.exports = {
  // adminAuth,
  userAuth
}