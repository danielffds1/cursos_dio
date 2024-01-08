// App.js dentro da pasta src/pages
import { useState } from 'react';
import gitLogo from '../assets/gitLogo.png';
import Input from '../componentes/Input';
import ItemRepo from '../componentes/ItemRepo';
import { Container } from "./styles";
import Button from '../componentes/Button';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  //Criando um estado para armazenar os arrays
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`/repos/${currentRepo}`);
    //Verificando se o id do repositório já existe no array
    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id);
      if(!isExist){
        //Concatenando o array com o novo repositório
        setRepos(prev => [...prev, data]);
        setCurrentRepo("");
        return
      }
    }
    alert("Repositório não encontrado");
  }

  const handleRemoveRepo = (id) => {
    //Removendo o repositório
    const newRepos = repos.filter(repo => repo.id !== id);
    setRepos(newRepos);
  }  

  return (
    <Container className="App">
      <img src={gitLogo} width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo) => (
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;
