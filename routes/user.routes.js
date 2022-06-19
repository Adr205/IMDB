const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userFactory = require("../js/userFactory");

const calculateKey = require("../js/calculateKey");
router.get("/", (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(users);
    }
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(user);
    }
  });
});

router.post("/", (req, res) => {
  const userHelper = new User(req.body);
  const preferences = req.query;

  const user = userFactory.createUser(
    userHelper.userName,
    userHelper.password,
    userHelper.email,
    calculateKey(preferences)
  );

  const newUser = new User(user);

  newUser.password = newUser.encryptPassword(newUser.password);

  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(user);
    }
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  const userHelper = await User.findById(id);

  if (userHelper) {
    const preferences = req.query;

    let user = userFactory.createUser(
      userHelper.userName,
      userHelper.password,
      userHelper.email,
      userHelper.key
    );

    user.key = calculateKey(preferences);

    const newUser = new User(user);

    const updateKey = await User.findByIdAndUpdate(id, {key : newUser.key}, {new: true,});

    if (updateKey) {
      res.status(200).json(updateKey);
    } else {
      res.status(500).send("Error");
    }
  } else {
    res.status(404).json({ ok: false, message: "User not found" });
  }
});

router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ ok: true, message: "User deleted" });
    }
  });
});

module.exports = router;
