require('dotenv').config();
const jwt = require("jsonwebtoken");


module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token.replace("Bearer ", ""), `${process.env.JWT_SECRET_KEY}`, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.user = decoded;
    next();
  });
};
