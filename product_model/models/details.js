import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      minLength: 10,
    },
    price: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value >= 0;
        },
        message: "Invalid price, price has to be positive.",
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: Array,
      validate: {
        validator: function (value) {
          return value.length >= 2;
        },
        message: "At least two images are required.",
      },
    },
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // Validate Israeli phone number
          return /^\d{10}$/.test(value);
        },
        message: "Invalid Israeli phone number.",
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default detailsSchema;
