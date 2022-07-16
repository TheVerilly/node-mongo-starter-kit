import { Router } from 'express';

import { getUsers, createUser, updateUser, deleteUser } from 'Controllers/user-controller';

const router = Router();

router.get('/', getUsers);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;
