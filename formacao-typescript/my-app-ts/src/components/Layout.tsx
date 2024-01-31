//Layout.tsx dentro da pasta src/components

import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ( { children}: any) => {
    return (
        <Box 
          overflow='hidden'
        >
            <Header />
            {children}
            <Footer />
        </Box>
    )
}