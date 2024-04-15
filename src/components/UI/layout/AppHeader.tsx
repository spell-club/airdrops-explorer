import { Box, Container, Flex } from '@chakra-ui/react'

import { SearchBar } from 'components/UI/searchBar'
import Logo from 'assets/icons/Logo'
import { captureDataLayer } from 'utils/analytics'

const AppHeader = () => {
	const onSearch = (value: string) => {
		captureDataLayer('wallet_search', {
			value,
		})
	}

	return (
		<Box as="header" h="75px">
			<Container maxW="container.xl" h="100%">
				<Flex w="100%" h="100%" align="center" justify="space-between">
					<Logo />

					<SearchBar me="10px" borderRadius="30px" onSearch={onSearch} />
				</Flex>
			</Container>
		</Box>
	)
}

export default AppHeader
