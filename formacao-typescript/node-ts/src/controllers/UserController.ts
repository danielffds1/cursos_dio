//UserController.ts dentro da pasta src/controllers
import { Request, Response, response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {

    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService;
    }

    createUser = (request: Request, response: Response) => {
        const user = request.body;

        if(!user.name){
            return response.status(400).json({ message: 'Bad request! Nome é obrigatório' });    
        }

        if(!user.email){
            return response.status(400).json({ message: 'Bad request! Email é obrigatório' });    
        }

        if(!user.password){
            return response.status(400).json({ message: 'Bad request! Password é obrigatório' });    
        }
        
        this.userService.createUser(user.name, user.email, user.password);
        return response.status(201).json({ message: 'User created' });
    }

    getUsers = async (request: Request, response: Response) => {
        const { userId } = request.params;
        const user = await this.userService.getUser(userId);
        return response.status(200).json({
            userId: user?.id_user,
            name: user?.name,
            email: user?.email
        });
    }

    deleteUser = (request: Request, response: Response) => {
        const user = request.body;
        console.log('Deletando Usuário',user)
        return response.status(200).json({ message: 'User deleted' });
    }

}