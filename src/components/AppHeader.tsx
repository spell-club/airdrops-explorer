import React from 'react'
import { Box, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const AppHeader = () => {
  const { push } = useRouter()
  const bg = useColorModeValue('purple.100', 'navy.700')
  return (
    <Box as='header' h='60px' bg={bg}>
      <Container maxW='container.xl' h='100%'>
        <Flex w='100%' h='100%' align='center'>
          <Text
            fontSize={24}
            color='white'
            fontWeight={600}
            onClick={() => push('/')}
            cursor='pointer'
          >
            SpellDrop.xyz
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default AppHeader
