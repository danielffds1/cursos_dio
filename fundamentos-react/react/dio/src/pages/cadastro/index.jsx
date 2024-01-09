//index.js dentro da pasta src/pages/cadastro

import React from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Button } from "../../components/Button";
import { api } from '../../services/api'
import axios from 'axios';

import { 
    Column, 
    Container, 
    SubTitleCadastro, 
    Title, 
    Wrapper, 
    TitleCadastro, 
    Row, 
    InformationText,
    FazerLogin
} from "./styles";

const Cadastro = () => {

    const navigate = useNavigate()

    const schema = yup.object().shape({
        name: yup.string().required('Campo Obrigatório'),
        email: yup.string().email('email não é válido').required('Campo Obrigatório'),
        password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório')
    }).required();

    const { control, handleSubmit, formState: { errors  } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickFeed = () => {
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleCadastro>Comece agora grátis</TitleCadastro>
                        <SubTitleCadastro>Crie sua conta e make the change.</SubTitleCadastro>
                        <form >
                            <Input name="Nome" control={control} placeholder="Nome completo" leftIcon={<FaUser />} />
                            <Input name="E-mail" error={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="Senha" error={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Cadastrar" variant="secondary" type="submit" onClick={handleClickFeed}/>
                        </form>

                        <Row>
                            <InformationText>
                                Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                            </InformationText>
                        </Row>
                        <Row>
                            <FazerLogin>Já tenho conta. <span onClick={handleClickSignIn}>Fazer Login</span> </FazerLogin>
                        </Row>

                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export {Cadastro}