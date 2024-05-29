import React, { PropsWithChildren } from 'react'
import { Box, Flex } from '@chakra-ui/react'

const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<Box as="section" mb="20px">
			<Box
				opacity="1"
				bgImage="radial-gradient(#a378e1 1.1px, #000614 1.1px)"
				bgSize="22px 22px"
				borderRadius="20px"
				h="150px"
				w="100%"
			/>
			<Flex w="100%" justify="center" mt={-20} mb="20px">
				{children}
			</Flex>
		</Box>
	)
}

export default PageContainer
