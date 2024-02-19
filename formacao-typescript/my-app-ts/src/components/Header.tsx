//Header.tsx dentro da pasta src/components/Header
import { Box, Button, Center, Flex, Heading, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { Link, useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'

export const Header = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        changeLocalStorage({login: false})
        setIsLoggedIn(false)
        navigate('/')
    }
    
    return(
        <Flex backgroundColor='#6b256f' padding='5px'>
            <Box>
                <Center padding='10px'>
                    <Heading as='h1' size='lg' fontSize='50px' color='white'>
                        Dio Bank
                    </Heading>
                </Center>
            </Box>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button
                            onClick={ () => logout()}
                            margin='auto'
                        >
                            Sair
                        </Button>
                     </>
                )
            }
        </Flex>
    )
}