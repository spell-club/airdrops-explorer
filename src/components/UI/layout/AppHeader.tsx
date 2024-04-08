import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import { SearchBar } from './navbar/searchBar/SearchBar'
import Logo from '../../../assets/icons/Logo'

const AppHeader = () => {
  return (
    <Box as='header' h='75px'>
      <Container maxW='container.xl' h='100%'>
        <Flex w='100%' h='100%' align='center' justify='space-between'>
          <Logo />
          <SearchBar me='10px' borderRadius='30px' />
        </Flex>
      </Container>
    </Box>
  )
}

export default AppHeader
