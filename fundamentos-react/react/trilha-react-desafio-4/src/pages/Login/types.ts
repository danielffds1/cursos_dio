//types.ts dentro da pasta src/pages/Login
export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}