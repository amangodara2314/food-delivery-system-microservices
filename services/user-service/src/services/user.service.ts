import { AppError } from "@food-delivery/errors";
import { UserDocument } from "../models/user.model.ts";

const createUser = (data: UserDocument) => {};

const getUser = async (id: string): Promise<void> => {
  if (!id) {
    throw new AppError("User id is required", 400, []);
  }
};
