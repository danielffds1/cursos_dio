import { DioAccount } from "./DioAccount";

// CompanyAccount.ts dentro da pasta class
export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    //Dizendo que o método poderá retornar vazio
    getLoan = (valorEmprestimo: number): void => {
        if(this.getStatus()){
            this.balance += valorEmprestimo;
            console.log(`Emprestimo de ${valorEmprestimo} realizado com sucesso`);
            console.log(`Seu saldo atual é de ${this.balance}`);
        }
    }
    // Polimorfismo - Sobrescrevendo o método da classe pai
    deposit = (valorDepositado: number): number => {
        this.balance += valorDepositado;
        return this.balance;
    }
}