import { Box } from "@chakra-ui/react"
import { useState } from "react"

export const Card = ({ children }: any) => {

  return (

    <Box backgroundColor='#efefef' borderRadius='25px' padding='15px'>
      {children}
    </Box>

  )
}