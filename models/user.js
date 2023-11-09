const { Schema, model } = require("mongoose");

const Joi = require("joi");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

const userRegistration = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userLogIn = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const schemas = {
  userRegistration,
  userLogIn,
};

const User = model("user", userSchema);

module.exports = {
  schemas,
  User,
};
