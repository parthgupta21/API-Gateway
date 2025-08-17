const express = require("express");
const { getUser } = require("../services/user");
const { getOrder } = require("../services/order");

const router = express.Router();

// user service
router.get("/users/:id", async (req, res, next) => {
  try {
    const data = await getUser(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// order service
router.get("/orders/:id", async (req, res, next) => {
  try {
    const data = await getOrder(req.params.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
