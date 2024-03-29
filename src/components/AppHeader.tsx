import React from 'react'
import { Box, Container, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { SearchBar } from './navbar/searchBar/SearchBar'

const AppHeader = () => {
  const { push } = useRouter()
  return (
    <Box as='header' h='75px'>
      <Container maxW='container.xl' h='100%'>
        <Flex w='100%' h='100%' align='center' justify='space-between'>
          <Text
            fontSize={24}
            color='white'
            fontWeight={600}
            onClick={() => push('/')}
            cursor='pointer'
          >
            SpellDrop.xyz
          </Text>

          <SearchBar me='10px' borderRadius='30px' />
        </Flex>
      </Container>
    </Box>
  )
}

export default AppHeader
