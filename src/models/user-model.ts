import { Schema, model } from 'mongoose';

import { UserTypes } from 'Types/user-types';

const userSchema = new Schema<UserTypes>({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    word: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const UserModel = model<UserTypes>('User', userSchema);

export default UserModel;
