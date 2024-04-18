'use client'
import { RepeatIcon } from '@chakra-ui/icons'
import { Button, Heading, Center, Flex, Icon } from '@chakra-ui/react'
import { FaExclamationTriangle } from 'react-icons/fa'

export default function ErrorPage({ reset }: { reset: () => void }) {
	return (
		<Center height="100vh">
			<Flex direction="column" alignItems="center">
				<Icon as={FaExclamationTriangle} boxSize={24} color="red.500" />

				<Heading size="xl" mt={4} textAlign="center">
					Oops! Something went wrong.
				</Heading>

				<Button variant="darkBrand" mt={8} onClick={reset} rightIcon={<RepeatIcon />}>
					Try Again
				</Button>
			</Flex>
		</Center>
	)
}
