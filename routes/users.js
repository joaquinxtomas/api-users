import { Router } from "express";
import { UserController } from "../controllers/users.js";

export const userRoutes = Router();

userRoutes.get('/', UserController.getAll)
userRoutes.post('/', UserController.create)
userRoutes.get('/:id', UserController.getById)
userRoutes.patch('/:id', UserController.update)
userRoutes.delete('/:id', UserController.delete)