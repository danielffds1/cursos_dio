//App.js dentro de src

import { useState, useEffect } from "react"

const App = () => {
    const [usuario, setUsuario] = useState("")
    const [count, setCount] = useState(0)
    const [usuarios, setUsuarios] = useState(["Pablo", "Pedro", "Juan"])

    const handleAddUser = () => {
        //Aqui estou copiando um array novo e adicionando o novo usuario
        setUsuarios([...usuarios, usuario])
    }
    //useEffect é um hook que é executado sempre que o componente é montado
    useEffect(() => {
        setCount(usuarios.length)
    }, [usuarios])

    return (
        <div className="App">
            <h1>Hello Dio</h1>
            <h3>Total de usuários: {count}</h3>
            <div>
                <input
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />
                <button onClick={handleAddUser}> Adicionar</button>
            </div>
            <hr />
            {usuarios.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
}

export default App