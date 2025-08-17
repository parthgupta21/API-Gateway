require('dotenv').config();
const jwt = require("jsonwebtoken");


// Payload can be anything you want to include
const payload = {
  id: "123",
  name: "John Doe",
  role: "user"
};

// Secret key (must match the one in auth.js)
const secret = process.env.JWT_SECRET_KEY;

console.log("zzzzzzzzzzzzzzzz", secret);

// Options: e.g., expires in 1 hour
const options = { expiresIn: "1h" };

// Generate token
const token = jwt.sign(payload, secret, options);

console.log("Your JWT token:");
console.log(token);
