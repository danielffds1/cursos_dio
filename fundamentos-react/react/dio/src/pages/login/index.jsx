// index.js dentro da pasta src/components/Input
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { MdEmail, MdLock } from 'react-icons/md'

import { api } from '../../services/api'

import { Container, Column, CriarText, EsqueciText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles"

const schema = yup.object().shape({
    email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo Obrigatório')
}).required();

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { erros} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    });

    const onSubmit = async formData => {
        try{
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if(data.length === 1){
                navigate('/feed')
            }else {
                alert('Usuário ou senha incorretos')
            }
        }catch(e){
            alert('Houve um erro, tente novamente.')
        }
    };
    
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="email" errorMessage={erros?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                            <Input name="password" errorMessage={erros?.password?.message}  control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                            <Button title="Entrar" variant="secondary"  type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }