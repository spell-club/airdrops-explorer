import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from '../card/Card'
import ClaimersTable from './ClaimersTable'
import { GetTopWinnersAndLosersResponse, TopParticipant } from 'api/types'

interface Props {
	topWinnersAndLosers: GetTopWinnersAndLosersResponse<TopParticipant>
}
const TopClaimersAndLosers = ({ topWinnersAndLosers }: Props) => {
	return (
		<Flex flexDirection="column" mt={{ base: '30px', xl: '0' }} gap={5}>
			<Card px="0px">
				<ClaimersTable
					title="Top Claimers"
					tableData={topWinnersAndLosers?.winners}
					isLoading={false}
				/>
			</Card>

			<Card px="0px">
				<ClaimersTable
					title="Top Losers"
					tableData={topWinnersAndLosers?.losers}
					isLoading={false}
				/>
			</Card>
		</Flex>
	)
}

export default TopClaimersAndLosers
