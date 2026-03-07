import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/*
REGISTER USER
*/
export const register = async (req, res) => {
  try {
    const { fullName, phone, email, password } = req.body || {};

    /* 1️⃣ Validate name (must contain space) */
    if (!fullName || !fullName.includes(" ")) {
      return res.status(400).json({
        message: "Full name must include first and last name"
      });
    }

    /* 2️⃣ Validate email format */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    /* 3️⃣ Validate phone number */
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phone || !phoneRegex.test(phone)) {
      return res.status(400).json({
        message: "Invalid phone number"
      });
    }

    /* 4️⃣ Check if user exists in MongoDB */
    const existingUser = await User.findOne({
      $or: [{ email }, { phone }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User with this email or phone already exists"
      });
    }

    /* 5️⃣ Hash password */
    const hashedPassword = await bcrypt.hash(password, 10);

    /* 6️⃣ Create user */
    const newUser = await User.create({
      fullName,
      phone,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully",
      userId: newUser._id
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};


/*
LOGIN USER
*/
export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

    /* 1️⃣ Validate email format */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format"
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Password is required"
      });
    }

    /* 2️⃣ Check MongoDB for user */
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    /* 3️⃣ Compare password */
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    /* 4️⃣ Generate JWT */
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};