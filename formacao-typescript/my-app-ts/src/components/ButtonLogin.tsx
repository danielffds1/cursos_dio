// ButtonLogin.tsx dentro da pasta src/components
import { Button } from "@chakra-ui/react";

interface IButtonLogin{
    onClick?: () => void
}

export const ButtonLogin: React.FC<IButtonLogin> = ({ onClick }) => {
    return (
        <Button onClick={onClick} colorScheme="teal" size='sm' width='100%' marginTop='5px'>Login</Button>
    )
};