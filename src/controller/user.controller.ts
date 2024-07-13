import { Request, Response } from "express";
import {
  getUsers,
  addUser,
  findUserById,
  modifyUser,
  removeUser,
} from "../service/user.service";

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { firstName, lastName, email, password, phoneNumber, address, role } =
    req.body;
  try {
    const newUser = await addUser({
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      role,
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await findUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { firstName, lastName, email, password, phoneNumber, address, role } =
    req.body;
  try {
    const updatedUser = await modifyUser(id, {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      address,
      role,
    });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  try {
    const deletedUser = await removeUser(id);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
