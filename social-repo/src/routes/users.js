const express = require("express");

const UserRepo = require("../repos/user-repo");

const router = express.Router();

router.get("/users", async (req, res) => {
  const users = await UserRepo.find();

  res.send(users);
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.findById(id);

  if (user) {
    res.send(user);
  } else {
    res.status(404).json({ message: "Can't find user" });
  }
});

router.post("/users", async (req, res) => {
  const { username, bio } = req.body;

  const user = await UserRepo.insert(username, bio);

  res.send(user);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const updatedUser = await UserRepo.update(id, username, bio);

  if (updatedUser) {
    res.send(updatedUser);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.delete(id);

  if (user) {
    res.status(200).json({ message: `user with id ${id} is deleted` });
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
