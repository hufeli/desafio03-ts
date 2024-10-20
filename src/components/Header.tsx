import { Box, Heading, Center, Flex, Spacer, Button } from '@chakra-ui/react'
import { MdOutlineLogout } from "react-icons/md"
import { AppContext } from './AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { changeLocalStorage } from '../services/storage'

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()

  const logout = () => {
    changeLocalStorage({
      name: undefined,
      email: undefined,
      isLoggedIn: false
    })
    setIsLoggedIn(false)
    navigate('/')
  }

  return (
    <Flex backgroundColor='#efefef' borderRadius='25px' padding='15px' marginBottom='15px'>
      <Box>
        <Heading fontSize='4xl' as='b' color='#33a'>
          <Center>Dio Bank</Center>
        </Heading>
      </Box>
      <Spacer />
      {
        isLoggedIn && (
          <>
            <Button
              onClick={() => logout()}
              leftIcon={<MdOutlineLogout />} colorScheme='pink' variant='solid'>
              Sair
            </Button>
          </>
        )
      }
    </Flex>
  )
}
