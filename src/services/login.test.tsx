import { login } from "./login"
import { api } from "../api"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
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

    const mockEmail = 'hudsfern@gmail.com'
    const mockPassword = '123456'
    
    // it('Deve exibir um alert com boas vindas', () => {
    //     login()
    //     expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    // })

    it('Deve conter a frase Saudações, internauta! Seja bem-vindo(a) ao Dio Bank caso o email seja valido', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso email ou senha seja inválido', async() => {
        const response = await login('email@inválido.com','123456')
        expect(response).toBeFalsy()
    })

})