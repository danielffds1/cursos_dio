// index.jsx dentro da pasta src/components/Header
import React from 'react'
import logo from "../../assets/logo-dio.png";
import { Button } from '../Button';
import { useNavigate } from "react-router-dom";

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {

    const navigate = useNavigate()
    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickCadastro = () => {
        navigate('/Cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img  src={logo} alt="Logo da dio" />
                    {autenticado ? (
                        <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...'/>
                        </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                        ) : null}
                </Row>

                <Row>
                {autenticado ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                ) : (
                <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" onClick={handleClickSignIn}/>
                    <Button title="Cadastrar" onClick={handleClickCadastro}/>
                </>)}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }