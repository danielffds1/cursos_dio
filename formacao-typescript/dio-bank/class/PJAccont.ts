import { DioAccount } from "./DioAccount";

export class PJAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (): number => {
        this.balance += 10;
        return this.balance;

    }
}