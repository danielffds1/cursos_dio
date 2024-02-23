//routes.ts dentro da pasta src
import { Router, Request, Response } from "express";
import { UserController } from "./controllers/UserController";
import { LoginController } from "./controllers/LoginController";
import { verifyAuth } from "./midlleware/verifyAuth";

export const router = Router();

const userController = new UserController();
const loginController = new LoginController();

//Obtendo dados da requisição
router.post('/user', userController.createUser)
router.get('/user/:userId', verifyAuth, userController.getUsers)
router.delete('/user', userController.deleteUser)

router.post('/login', loginController.login)