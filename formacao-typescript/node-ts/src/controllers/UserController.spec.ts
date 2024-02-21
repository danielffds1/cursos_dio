//UserController.spec.ts dentro da pasta src/controllers
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from 'express';

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn(),
        deleteUser: jest.fn()
    }

    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@dio.bank'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ message: 'User created' })
    })

    it('Deve verificar se não foi preenchido o name', () => {
        const mockRequest = {
            body: {
                name: '',
                email: 'nath@dio.bank'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Nome obrigatório' })
    })

    it('Deve verificar getAllUser está sendo chamado', () => {
        const mockRequest = {
            body: {
                name: 'nath',
                email: 'nath@dio.bank'
            }
        } as Request
        const mockResponse = makeMockResponse();

        userController.getAllUsers(mockRequest, mockResponse);

        expect(mockUserService.getAllUsers).toHaveBeenCalled();
        expect(mockResponse.state.status).toBe(200);
    })

    it('Deve verificar se o email não foi preenchido', () => {
        const mockRequest = {
            body: {
                name: 'jose',
                email: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email obrigatório' })
    })

    it('Deve verificar se o usuário foi deletado', () => {
        const mockRequest = {
            body: {
                email: 'jose@dio.bank'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.deleteUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toMatchObject({ message: 'User deleted' })
    })
})