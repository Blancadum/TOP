const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Damos forma al Schema de user
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["lector", "user", "psychologist"],
    default: "lector", 
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para encriptar contraseña
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); 
  this.password = await bcrypt.hash(this.password, 10);  
  next(); //siguiente middleware
});

module.exports = mongoose.model("User", userSchema);