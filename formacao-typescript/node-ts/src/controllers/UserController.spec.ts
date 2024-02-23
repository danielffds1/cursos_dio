//UserController.spec.ts dentro da pasta src/controllers
import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from 'express';
import { makeMockRequest } from "../__mocks__/mockRequest.mock";

const mockUserService = {
    createUser: jest.fn(),
    getUser: jest.fn()
}

jest.mock('../services/UserService', () => {
    return {
        UserService: jest.fn().mockImplementation(() => {
            return mockUserService
        })
    }
})

describe('UserController', () => {

    const userController = new UserController();
    const mockResponse = makeMockResponse();

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Nath',
                email: 'nath@dio.bank',
                password: 'password'
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
                email: 'nath@dio.bank',
                password: 'password'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Nome é obrigatório' })
    })

    it('Deve verificar se o email não foi preenchido', () => {
        const mockRequest = {
            body: {
                name: 'jose',
                email: '',
                password: 'password'
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Email é obrigatório'})
    })

    it('Deve verificar se o email não foi password', () => {
        const mockRequest = {
            body: {
                name: 'jose',
                email: 'jose@test.com',
                password: ''
            }
        } as Request
        const mockResponse = makeMockResponse()
        userController.createUser(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ message: 'Bad request! Password é obrigatório' })
    })

    // it('Deve verificar se o usuário foi deletado', () => {
    //     const mockRequest = {
    //         body: {
    //             email: 'jose@dio.bank'
    //         }
    //     } as Request
    //     const mockResponse = makeMockResponse()
    //     userController.deleteUser(mockRequest, mockResponse)
    //     expect(mockResponse.state.status).toBe(200)
    //     expect(mockResponse.state.json).toMatchObject({ message: 'User deleted' })
    // })

    it('Deve retornar o usuário com o userId informado', () => {
        const mockRequest = makeMockRequest({
            params: {
                userId: '123456'
            }
        })
        userController.getUsers(mockRequest, mockResponse)
        expect(mockUserService.getUser).toHaveBeenCalledWith('123456')
        expect(mockResponse.state.status).toBe(200)
    })
})