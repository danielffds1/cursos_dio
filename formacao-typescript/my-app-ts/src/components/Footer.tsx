import { Center, Heading } from "@chakra-ui/react"

//Footer.tsx dentro da pasta src/components
export const Footer = () => {
    const estiloFooter: React.CSSProperties = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#6b256f',
        padding: '10px',
        textAlign: 'center',
    };

    return (
        <Center style={estiloFooter}>
            <Heading as='h1' size='sm' color='white'>
                Dio Bank
            </Heading>
        </Center>
    )
}