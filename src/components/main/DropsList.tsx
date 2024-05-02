import React from 'react'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import AirdropProject from '../AirdropProject'
import useAirdrops from 'hooks/useAirdrops'
import { getStaticImageLink } from '../../utils'

interface Props {
	airdrops: any[]
}
const DropsList = ({ airdrops }: Props) => {
	const { airdrops: airdropsProjects } = useAirdrops()

	return (
		<Flex direction="column">
			<Text fontSize="xl" ms="24px" fontWeight="700" mb="20px">
				Recent Airdrops
			</Text>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
				{airdrops?.map((airdrop) => (
					<AirdropProject
						key={airdrop.id + airdrop.name}
						name={airdrop.name}
						airdropAmount={airdrop.airdrop_amount}
						tokenSymbol={airdrop.token_symbol}
						avgAmount={airdrop.average_airdrop_amount}
						image={getStaticImageLink(airdrop.name.toLowerCase())}
						{...airdrop}
					/>
				))}
			</SimpleGrid>
		</Flex>
	)
}

export default DropsList
