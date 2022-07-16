import { Types } from 'mongoose';
import { Request, Response } from 'express';

import UserModel from 'Models/user-model';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
};

export const createUser = async (req: Request, res: Response) => {
    const { body } = req;
    const newUser = new UserModel(body);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error: any) {
        res.status(409).json({ message: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    if (Types.ObjectId.isValid(id)) {
        const updatedUser = await UserModel.findByIdAndUpdate(id, body, { new: true });
        res.send(updatedUser);
    } else {
        res.status(404).send('No user');
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (Types.ObjectId.isValid(id)) {
        await UserModel.findByIdAndRemove(id);
        res.send({ message: 'User deleted' });
    } else {
        res.status(404).send('No user');
    }
};
