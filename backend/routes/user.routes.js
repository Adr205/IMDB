const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");

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

router.put("/:id", (req, res) => {
  const { key } = req.body;

  User.findByIdAndUpdate(
    req.params.id,
    { $set: { key } },
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(user);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ok: true, message: "User deleted"});
    }
  });
});

module.exports = router;
