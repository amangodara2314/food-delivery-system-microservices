import mongoose, { HydratedDocument } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "restaurant-owner"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

export type UserDocument = HydratedDocument<typeof userSchema>;

const User = mongoose.model("User", userSchema);

export default User;
