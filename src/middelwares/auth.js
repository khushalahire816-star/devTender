const adminAuth = (req, res, next) => {
  const token = "xzy";
  const isAdminAuthorized = token === "xzy";
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized..");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "khushal";
  const isAdminAuthorized = token === "khushal";
  if (!isAdminAuthorized) {
    res.status(401).send("User is unauthorized.")
  } else {
    next();
  }
}

module.exports = {
  adminAuth,
  userAuth
}