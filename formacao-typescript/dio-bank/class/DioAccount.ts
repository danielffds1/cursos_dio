// DioAccount dentro da pasta class
export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (valorDepositado: number): void => {
        if(this.validateStatus()){
            this.balance += valorDepositado
            console.log(`Deposito de R$ ${valorDepositado} realizado com sucesso. Obrigado ${this.name}`);
        }
    }

    widhdraw = (valorSacado: number): void => {
        if(this.validateStatus()){
            this.balance -= valorSacado
            console.log(`Saque de R$ ${valorSacado} realizado com sucesso. Obrigado ${this.name}`);
        }
    }

    getValue = (): void => {
        console.log(`Nome: ${this.name} | Saldo: ${this.balance}`)
    }

    private validateStatus = (): boolean =>{
        if(this.status){
            return this.status
        }
        throw Error('Conta inativa')
    }

    getStatus = (): boolean => {
        return this.status
    }
}