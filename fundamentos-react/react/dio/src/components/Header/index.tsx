// index.jsx dentro da pasta src/components/Header
import React, { useContext } from 'react'
import logo from "../../assets/logo-dio.png";
import { Button } from '../Button';
import { Link, useNavigate } from "react-router-dom";

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
import { useAuth } from '../../hooks/useAuth';

const Header = () => {

    const { user, handleSignOut } = useAuth()

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
                    <Link to="/">
                        <img  src={logo} alt="Logo da dio" />
                    </Link>
                    {user?.id ? (
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
                {user?.id ? (
                    <>
                        <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
                        <a href='#' onClick={handleSignOut}>
                            Sair
                        </a>
                    </>
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