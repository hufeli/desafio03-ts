import { useContext, useState } from "react"
import { Card } from "../components/Card"
import { AppContext } from "../components/AppContext"
import { VStack, Input, Text } from "@chakra-ui/react"
import { LoadingButton } from "../components/LoadingButton"
import { PasswordInput } from "../components/PasswordInput"
import { login } from "../services/login"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string, password: string) => {
        const loggedIn = await login(email, password)
        if (!loggedIn) {
            return alert('Email ou senha inválido')
        }
        setIsLoggedIn(true)
        navigate('/conta/1')

    }

    return (

        <Card>
            <VStack spacing={10} align='center'>

                <Text fontSize='3xl' as='b' color='#33A0f1'>
                    Faça o login
                </Text>

                <Input type='email' placeholder='Email' variant='flushed' value={email} onChange={(event) => setEmail(event.target.value)} />
                <PasswordInput variant='flushed' value={password} onChange={(event) => setPassword(event.target.value)} />
                <LoadingButton onClick={() => { validateUser(email, password) }} text='Login' loadingText='Logging in...' colorScheme='pink' width='100%' />
            </VStack>
        </Card>

    )
}

export default Home