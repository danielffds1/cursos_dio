//App.tsx dentro da pasta src
import { Layout } from './components/Layout';
import { 
  Box,
  ChakraProvider,
} from '@chakra-ui/react';
import { CardLogin } from './components/CardLogin';


function App() {

  return (
      <ChakraProvider>
        <Layout>
          <Box 
            minHeight='87vh' 
            backgroundColor='#9413dc' 
            padding='5px'
            overflow='hidden'
          >
           <CardLogin id={0} paragraph={''} details={''} />
          </Box>
        </Layout>
    </ChakraProvider>
  );
}

export default App;
