//Card.tsx dentro da pasta src/components
import { Box } from "@chakra-ui/react"

export const CardLogin = ({ children}: any) => {

    return (
        <Box backgroundColor='#ffffff' borderRadius='25px' padding='15px' margin='10px'>
            { children }
        </Box>
    )
}
