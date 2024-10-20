import { Box, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { AppContext } from "../components/AppContext"
import { useContext } from "react"

const ContaInfo = () => {

    const { name, email } = useContext(AppContext)

    return (
        <Box backgroundColor='#efefef' borderRadius='25px' padding='15px' marginBottom='15px'>
            <Text fontSize='3xl' fontWeight='bold' color="#1E192C">
                Informações da conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    Nome: {name}
                </Text>
                <Text fontSize='xl'>
                    Email: {email}
                </Text>
            </Link>
        </Box>
    )
}

export default ContaInfo