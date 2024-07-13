import { IUser } from "../models/user.model";
import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../repo/user.repo";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    return await getAllUsers();
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addUser = async (userData: Partial<IUser>): Promise<IUser> => {
  try {
    return await createUser(userData);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const findUserById = async (id: string): Promise<IUser | null> => {
  try {
    return await getUserById(id);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const modifyUser = async (
  id: string,
  userData: Partial<IUser>
): Promise<IUser | null> => {
  try {
    return await updateUser(id, userData);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const removeUser = async (id: string): Promise<IUser | null> => {
  try {
    return await deleteUser(id);
  } catch (error: any) {
    throw new Error(error);
  }
};
