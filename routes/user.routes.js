const express = require("express");
const router = express.Router();
const User = require("../models/User");
const mongoose = require("mongoose");

// Single Responsibility Principle
class Users {
  constructor(userName, password, email, key) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.key = key;
  }

  updateKey(key) {
    this.key = key;
  }
}

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
  const user = new User(req.body);

  user.password = user.encryptPassword(user.password);

  user.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(user);
    }
  });
});

router.put("/:id", async (req, res) => {
  const { key } = req.body;
  const { id } = req.params;

  const userHelper = await User.findById(id);

  if (userHelper) {
    const user = new Users(
      userHelper.userName,
      userHelper.password,
      userHelper.email,
      key
    );
    user.updateKey(key);
    const updateKey = await User.findByIdAndUpdate(id, user, { new: true });
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
