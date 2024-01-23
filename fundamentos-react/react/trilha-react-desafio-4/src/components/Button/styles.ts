//styles.ts dentro da pasta src/components/Button
import styled from 'styled-components';

interface ButtonContainerProps extends React.ComponentProps<any> {
    theme?: any;
    as?: string | undefined;
    forwardedAs?: string | undefined;
    children?: React.ReactNode;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }
`