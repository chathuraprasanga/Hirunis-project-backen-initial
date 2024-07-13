import { IUser, User } from "../models/user.model";

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find();
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  const newUser = new User(userData);
  return await newUser.save();
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const updateUser = async (id: string, userData: Partial<IUser>): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, userData, { new: true });
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};
