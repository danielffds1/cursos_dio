//UserService.ts dentro da pasta src/services
export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

//Irá adiconar o usuário no banco de dados
export class UserService{
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        this.db.push(user);
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db;
    }

    deleteUser = (email: string) => {
        this.db = this.db.filter(user => user.email !== email)
    }
}
