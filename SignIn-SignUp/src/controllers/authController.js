const express = require("express");
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registrationSchema } = require("../validators/authValidator");
const errorMiddleware = require("../middlewares/errorMiddleware");
const logger = require("../config/logger");
// creating user account - Signup;

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const result = registrationSchema.safeParse(req.body);

    // if (!username || !email || !password || !role) {
    //   return res.status(404).json("All feilds are required !!");
    // }

    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.issues,
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = {
      username,
      email,
      password: hashedPassword,
      role,
    };

    const user = await userModel.create(newUser);

    // res.status(201).json({
    //   success: true,
    //   message: "User registered successfully",
    //   user,
    // });

    // using logger

    logger.info(`User registered: ${email}`);

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const exist = await userModel.findOne({ email });

    if (!exist) {
      return res.status(405).json({
        message: "User doesn't Exist !!",
      });
    }

    const isMatching = await bcrypt.compare(password, exist.password);

    if (!isMatching) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: exist._id,
        email: exist.email,
        role: exist.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );

    res.status(200).json({
      success: true,
      user: {
        id: exist._id,
        username: exist.username,
        email: exist.email,
        role: exist.role,
        token,
      },
    });

    logger.info(
  `User logged in: ${email}`
);

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const logout = async (req, res) => {};

module.exports = { registerUser, login };
