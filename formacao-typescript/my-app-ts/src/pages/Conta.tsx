//Conta.tsx dentro da pasta src/pages
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import { Center, Flex, Heading, SimpleGrid, Spacer, Spinner } from "@chakra-ui/react"
import { AppContext } from '../components/AppContext'
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import moment from 'moment';

interface UserData {
    email: string,
    password: string,
    name: string,
    balance: number,
    id: string
}

//Conta.tsx dentro da pasta src/pages
const Conta = () => {

    const [ userData, setUserData ] = useState<null | UserData>()
    const actualData = moment();
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)
    
    !isLoggedIn && navigate('/')
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    if(userData && id !== userData.id){
        navigate('/')
    }

    const handleClick = () => {
      navigate('/infoconta', { state: { userData } });
    };
    
    return (
        <>
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size="xl" />
                        </Center>
                    ) :
                    (
                        <>
                        <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={actualData.format('DD/MM/YYYY HH:mm:ss')}/>
                        <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`}/>
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
        <Center margin={5}>
            <Heading 
                onClick={handleClick}
                color='white'
            >
                Informações do usuário
            </Heading>
        </Center>
        </>
        
        
    )
}

export default Conta;