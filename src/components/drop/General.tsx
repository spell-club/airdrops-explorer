// Chakra imports
import { Text, useColorModeValue } from '@chakra-ui/react'
// Custom components
import Card from '../card/Card'

interface Props {
	description: string
}

export default function GeneralInformation({ description }: Props) {
	// Chakra Color Mode
	const textColorSecondary = 'gray.400'
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset')
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
