import { Text } from '@chakra-ui/react'

import Card from '../card/Card'

interface Props {
	description: string
}

export default function GeneralInformation({ description }: Props) {
	const textColorSecondary = 'gray.400'

	return (
		<Card pe="20px" w="100%">
			<Text fontWeight="bold" fontSize="2xl" mt="10px" mb="4px">
				Description
			</Text>

			<Text whiteSpace="pre-wrap" color={textColorSecondary} fontSize="16" me="26px">
				{description}
			</Text>
		</Card>
	)
}
