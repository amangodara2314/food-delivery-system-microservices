import User, { UserDocument } from "../models/user.model.ts";

const createUser = async (data: UserDocument) => {
  return await User.create(data);
};

const getUserById = async (id: string) => {
  return await User.findById(id);
};

export default {
  createUser,
  getUserById,
};
