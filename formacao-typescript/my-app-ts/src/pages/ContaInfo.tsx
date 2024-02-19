//ContaInfo.tsx dentro da pasta src/pages

import { Center, Flex, Text } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom";

const ContaInfo = () => {
    const location = useLocation();
    const userData = location.state ? location.state.userData : null;

    return(
        <>
            <Center color='white'>
                <Text fontSize='4xl' fontWeight='bold'>
                    Informações da conta
                </Text>
            </Center>
            <Flex marginLeft={3}>
                <Link to='/conta/1'>
                    <Text fontSize='3xl' color='white'>Nome: {userData ? userData.name : 'Usuário não encontrado'}</Text>
                    <Text fontSize='3xl' color='white'>Email: {userData ? userData.email : 'Email não encontrado'}</Text>
                </Link>
            </Flex>
        </>
        
    )
}

export default ContaInfo;