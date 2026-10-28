import express from 'express'
import { createUser, deleteUser, getSingleUser, getUser, updateUser } from './user.controller.js';
const Routes = express.Router();

Routes.get('/',getUser);
Routes.get('/:id',getSingleUser);
Routes.post('/',createUser);
Routes.delete('/:id',deleteUser);
Routes.put('/:id',updateUser);

export {Routes}
