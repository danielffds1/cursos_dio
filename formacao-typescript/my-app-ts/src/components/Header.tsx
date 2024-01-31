//Header.tsx dentro da pasta src/components/Header
import { Center, Heading } from '@chakra-ui/react'

export const Header = () => {
    return(
        <Center bg='#6b256f' padding='10px'>
            <Heading as='h1' size='lg' fontSize='50px' color='white'>
                Dio Bank
            </Heading>
        </Center>
        
    )
}