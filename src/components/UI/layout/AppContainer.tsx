import React, { PropsWithChildren } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const AppContainer = ({ children }: PropsWithChildren) => {
	return (
		<Flex flexDir="column" minH="100vh">
			<AppHeader />

			<Box as="main" flex="1 0 auto">
				<Container maxW="container.xl" py={5}>
					{children}
				</Container>
			</Box>
			<AppFooter />
		</Flex>
	)
}

export default AppContainer
