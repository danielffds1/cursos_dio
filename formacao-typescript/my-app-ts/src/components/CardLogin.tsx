//Card.tsx dentro da pasta src/components
import { Box, Center, Input } from "@chakra-ui/react"
import React from "react"
import { ButtonLogin } from "./ButtonLogin"
import { login } from '../services/login';

interface ICard{
    id: number,
    paragraph: string,
    details: string,
    
}

export const CardLogin = ({ id, paragraph, details }: ICard) => {

    return (
        <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px' margin='10px'>
            <Center>Faça o login</Center>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Center>
                <ButtonLogin onClick={login} />
            </Center>
        </Box>
    )
}
