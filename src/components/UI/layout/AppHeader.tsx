import { Box, Container, Flex } from '@chakra-ui/react'

import { SearchBar } from 'components/UI/searchBar'
import Logo from 'assets/icons/Logo'
import { onSearch } from 'utils/analytics'
import AppNav from './AppNav'
import AppMobileMenu from './AppMobileMenu'

const AppHeader = () => {
	return (
		<Box as="header" h="75px">
			<Container maxW="container.xl" h="100%">
				<Flex w="100%" h="100%" align="center" justify="space-between">
					<Logo />

					<AppNav display={{ base: 'none', lg: 'flex' }} />

					<SearchBar
						me="10px"
						borderRadius="30px"
						onSearch={onSearch}
						display={{ base: 'none', lg: 'block' }}
					/>

					<AppMobileMenu display={{ base: 'block', lg: 'none' }} />
				</Flex>
			</Container>
		</Box>
	)
}

export default AppHeader
