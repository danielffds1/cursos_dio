//Dio Banking
// app.ts dentro da raiz
import { CompanyAccount } from "./class/CompanyAccount";
import { PJAccount } from "./class/PJAccont";
import { PeopleAccount } from "./class/PeopleAccount";


const peopleAccount: PeopleAccount[] = [
    new PeopleAccount(1, "João", 10),
    new PeopleAccount(2, "Maria", 11),
    new PeopleAccount(3, "José", 12),
];

peopleAccount[0].deposit(1000);
peopleAccount[0].widhdraw(100);

peopleAccount[1].deposit(900);
peopleAccount[1].widhdraw(550)
peopleAccount[1].deposit(150);

peopleAccount[2].deposit(100);
peopleAccount[2].widhdraw(50);
peopleAccount[2].deposit(150);

for (const account of peopleAccount) {
    account.getValue();
}


const companyAccount: CompanyAccount = new CompanyAccount("DioBank", 1);
companyAccount.deposit(1000);
companyAccount.getLoan(1000);

const pjAccount: PJAccount = new PJAccount("Marcone", 10);
pjAccount.deposit();
pjAccount.deposit();
pjAccount.deposit();
pjAccount.getValue();