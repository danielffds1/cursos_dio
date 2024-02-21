//UserService.spec.ts dentro da pasta src/services

import { User, UserService } from "./UserService";

//Teste para ver se está adiconando usuário no banco de dados
describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);
    
    it('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log')
        userService.createUser('nath', 'nath@test.com')
        expect(mockConsole).toHaveBeenCalledWith('DB atualizado', mockDb)
    })
})