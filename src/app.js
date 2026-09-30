const express = require("express");

const app = express();

const {adminAuth, userAuth} = require("./middelwares/auth")

app.use("/admin", adminAuth)
app.get("/admin/getAllData", (req, res) => {
  res.send("All data of admin..");
})
app.delete("/admin/deleteAll", (req, res) => {
  res.send("Deleted all data..");
})

//app.use("/user", userAuth)
app.get("/user",userAuth, (req, res) => {
  res.send("This is user request handler.");
});





//Authorized request handler
// app.get("/admin/getAllData", (req, res) => {
//   const token = "abcxyz";
//   const isAdminAuthorized = token === "xyz";

//   if (isAdminAuthorized) {
//     res.send("You accessed all data of admin..");
//   } else {
//     res.status(401).send("Unauthorized..");
//   }
// })

// app.delete("/admin/deleteAll", (req, res) => {
//   res.send("Deleted all Data...")
// })


//Independent Route Handlers
// app.use("/user", (req, res, next) => {
//   // res.send("This is Independent Route Handler.");
//   next();
// })

// app.get("/user", (req, res, next) => {
//   // res.send("This is 1st route handler.")
//   next();
// },
//   (req, res) => {
//     res.send("This is 2nd route handler.");
// })

//Multiple route Handlers
// app.use(
//   "/user",
//   (req, res, next) => {
//     console.log("1st Response");
//     next();
//   },
//   (req, res, next) => {
//     console.log("2nd Response.");
//     next()
//   },
//   (req, res, next) => {
//     console.log("3rd Response");
//     //res.send("This is 3rd Route Handler.")
//     next();
//   },
//   (req, res, next) => {
//     console.log("4th Response");
//     next();
//   },
//   (req, res, next) => {
//     console.log("5th Response");
//     res.send("This is 5th Route Randler.")
//   },
// );

app.listen(3000, () => {
  console.log("My server is running on 3000 port")
})