const User = require("../models/User");
const mongoose = require("mongoose");
const createToken = require("../helpers/createToken");

const UserController = {
  me: async (req, res) => {
    return res.json(req.user);
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.login(email, password);

      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });

      return res.json({ user, token });
    } catch (error) {
      console.error("Error logging in User:", error.message);
      return res.status(400).json({ error: error.message });
    }
  },
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.register(username, email, password);

      const token = createToken(user._id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: 3 * 24 * 60 * 60 * 1000,
      });

      return res.json({ user, token });
    } catch (error) {
      console.error("Error creating User:", error.message);
      return res.status(400).json({ error: error.message });
    }
  },
  logout: (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    return res.json({ message: "user logged out" });
  },
};

module.exports = UserController;