import { SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from 'react-router-dom'
import CardInfo from "../components/CardInfo"
import { useContext, useEffect, useState } from "react"
import { api } from "../api"
import { AppContext } from "../components/AppContext"
import { changeLocalStorage } from "../services/storage"


interface UserData {
    name: string
    email: string
    password: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | UserData>()
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

    const actualData = new Date()

    if (userData && id !== userData.id) {
        navigate('/')
    }

    changeLocalStorage({
        name: userData?.name,
        email: userData?.email,
        isLoggedIn: true
    })

    return (
        <SimpleGrid columns={2} spacing={8}>
            {
                userData === undefined || userData === null ?
                    (
                        <center>
                            <Spinner size='xl' color="white" />
                        </center>
                    ) :
                    (
                        <>
                            <CardInfo
                                mainContent={`Bem vindo, ${userData?.name}!`}
                                content={`
                                ${actualData.getDay()}/
                                ${actualData.getMonth()}/
                                ${actualData.getUTCFullYear()}
                                ${actualData.getHours()}:
                                ${actualData.getMinutes()}
                            `}
                            />
                            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`}></CardInfo>
                        </>
                    )
            }


        </SimpleGrid>
    )
}

export default Conta