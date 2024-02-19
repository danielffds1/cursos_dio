//Layout.tsx dentro da pasta src/components

import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ( { children}: any) => {
    return (
        <Box 
          overflow='hidden'
          height='100vh'
          backgroundColor='#9413dc'
        >
            <Header />
            {children}
            <Footer />
        </Box>
    )
}