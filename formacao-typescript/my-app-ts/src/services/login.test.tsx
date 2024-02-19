// login.test.tsx dentro da pasta services/src
import { login } from './login'

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    /*Veja que está fazendo uma desestruturação de todo o meu teste */
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {

    const mockEmail = 'nath@dio.bank'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas caso o email ou senha seja valido', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email ou senha seja inválido', async() => {
        const response = await login('email@invalido.com', '123456')
        expect(response).toBeFalsy()
    })
})