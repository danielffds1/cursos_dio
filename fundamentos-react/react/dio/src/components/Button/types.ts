//types.ts dentro da pasta src/components/Button
export interface IButton {
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
}

export interface IButtonStyled {
    variant: string;
}