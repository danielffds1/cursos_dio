// login.test.tsx dentro da pasta services/src
import { login } from './login'

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login()
        expect(mockAlert).toBeCalled()
    })

    it('Conferindo o valor do alert', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo ao banco Dio Bank!')
    })
})