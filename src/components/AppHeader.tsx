import React from 'react'
import { Box, Container, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const AppHeader = () => {
  const { push } = useRouter()
  return (
    <Box as='header' h='60px' bg='purple.100'>
      <Container maxW='container.xl' h='100%'>
        <Flex w='100%' h='100%' align='center'>
          <Text
            fontSize={24}
            color='white'
            fontWeight={600}
            onClick={() => push('/')}
            cursor='pointer'
          >
            Airdrops explorer
          </Text>
        </Flex>
      </Container>
    </Box>
  )
}

export default AppHeader
