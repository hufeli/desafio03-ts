import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
  return (
    <Box minHeight='100vh' backgroundColor='#1E192C' padding='25px'>

      <Header />

      {children}

    </Box>

  )
}
