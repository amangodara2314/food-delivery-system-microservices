import mongoose, { HydratedDocument } from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    ownerId: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export type RestaurantDocument = HydratedDocument<typeof restaurantSchema>;

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
