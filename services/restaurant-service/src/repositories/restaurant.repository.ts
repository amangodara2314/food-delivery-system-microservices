import Restaurant, { RestaurantDocument } from "../models/restaurant.model.ts";

const createRestaurant = async (data: RestaurantDocument) => {
  return await Restaurant.create(data);
};

const getRestaurantById = async (id: string) => {
  return await Restaurant.findById(id);
};

export default {
  createRestaurant,
};
