const express = require("express");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"])
const connectDB = require("./config/database");
const app = express();

const { error } = require("console");//right now, i do not remember what is use of this
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(cors({
  origin : "http://localhost:5173",
  credentials : true
}));

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/requests")

app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);


connectDB()
  .then(() => {
    console.log("Database connected sucessfully..");
    app.listen(3000, () => {
      console.log("My server is running on 3000 port");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected..");
    console.error(err);
  });
// //get data from database
// app.get("/user", async (req, res) => {
//   const userEmail = req.body.email;

//   const user = await User.find({ email: userEmail });

//   try {
//     if (user.length === 0) {
//       res.send("There is no user with this email");
//     } else {
//       res.send(user);
//     }
//   }
//   catch (err) {
//     res.status(400).send("Something went wrong.");
//   }
// })



// app.get("/feed", async (req, res) => {
//   const allData = await User.find({});
//   try {
//     res.send(allData);
//   } catch (err) {
//     res.status(400).send("Something went wrong");
//   }
// })




// app.get("/findone", async (req, res) => {
//   const useremail = req.body.email;
//   const user = await User.findOne({ email: useremail })
  
//   try {
//      if (!user) {
//       res.status(400).send("User not found");
//     } else {
//         res.send(user);
//     }
//   } catch (err) {
//     res.status(400).send("Something went wrong..");
//   }
// })

//delete data from database
// app.delete("/feed", async (req, res) => {
//   const userId = req.body.userId;

//   const user = await User.findByIdAndDelete({ _id: userId});

//   res.send("Deleted data successfully.");
// })



//update user data from database
// app.patch("/user/:userId", async (req, res) => {
//   const userId = req.params?.userId;
//   const data = req.body;
//   try {
//     const ALLOWED_UPDATES = ["userId", "photoUrl", "about", "skill", "age", "password"]
//     const isUpdateAllowed = Object.keys(data).every((k) =>
//       ALLOWED_UPDATES.includes(k)
//     );

//     if (!isUpdateAllowed) {
//       throw new error("Update is not allowed");
//     }

//     if (data?.skill.length > 10) {
//       throw new error("More 10 is not allowed");
//     }

//     const user = await User.findByIdAndUpdate({ _id: userId }, data, {
//       returnDocument: "after",
//       // runvalidators: true,
//     });
//     res.send("Update user data successfully..");
//   } catch (err) {
//     res.status(400).send("something went wrong: " +err.message);
//   }
// })



// app.get("/admin", (req, res) => {
//   try {
//     throw new Error("efdfs");
//     res.send("This is try catch block")
//   }catch (err) {
//     res.send("This is try catch error")
//   }  
// })


// app.get("/user", (req, res) => {
//   throw new Error("dfsdsfe");
//   res.send("This is exception handling code.")
// })

// app.use("/", (err, req, res, next) => {
//   res.status(500).send("Something went to wrong.")
// })

// const {adminAuth, userAuth} = require("./middelwares/auth")

// app.use("/admin", adminAuth)
// app.get("/admin/getAllData", (req, res) => {
//   res.send("All data of admin..");
// })
// app.delete("/admin/deleteAll", (req, res) => {
//   res.send("Deleted all data..");
// })

// //app.use("/user", userAuth)
// app.get("/user",userAuth, (req, res) => {
//   res.send("This is user request handler.");
// });





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

