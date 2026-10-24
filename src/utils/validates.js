const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Please enter Firstname and Lastname accurately.");
  }else if (!validator.isEmail(email)) {
    throw new Error("Enter valid email address");
  }else if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter strong password.");
  }
  
};

const validateInputUserData = (req) => {
  const allowedToEdit = ["firstName", "lastName", "about", "photoUrl","age","gender","skill"];

  const isAllowedEdit = Object.keys(req.body).every(key => allowedToEdit.includes(key));

  return isAllowedEdit;

}

module.exports = {
  validateSignupData,
  validateInputUserData
}