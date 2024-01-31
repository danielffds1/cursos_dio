import { Center, Heading } from "@chakra-ui/react"

//Footer.tsx dentro da pasta src/components
export const Footer = () => {
    return(
        <Center bg='#6b256f' padding='10px'>
            <Heading as='h1' size='sm' color='white'>
                Dio Bank
            </Heading>
        </Center>
        
    )
}