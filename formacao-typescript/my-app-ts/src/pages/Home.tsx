//Home.tsx dentro da pasta src/pages
import { Box, Center, Input } from "@chakra-ui/react";
import { CardLogin } from "../components/CardLogin";
import { useContext, useState } from "react";
import { ButtonLogin } from "../components/ButtonLogin";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password)

    if(!loggedIn){
      return alert('Email inválido')
    }
    setIsLoggedIn(true)
    changeLocalStorage({login: true})
    navigate('/conta/1')
  }
  
    return (
        <Box 
          padding='5px'
          overflow='hidden'
        >
        <CardLogin>
          <Center>
                  <h1>Faça o login</h1>
              </Center>
              <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
              <Input placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
              <Center>
                  <ButtonLogin onClick={ () => validateUser(email, password)} />
              </Center>
        </CardLogin>
        </Box>
    )
}

export default Home;

