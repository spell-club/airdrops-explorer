import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from '../card/Card'
import ClaimersTable from './ClaimersTable'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../hooks/useClientApi'
import { GetTopWinnersAndLosersResponse, TopParticipant } from '../../api/types'

interface Props {
	topWinnersAndLosers: GetTopWinnersAndLosersResponse<TopParticipant>
}
const TopClaimersAndLosers = ({ topWinnersAndLosers }: Props) => {
	const { clientApi } = useClientApi()
	// const { data: topWinnersAndLosers, isLoading: isWinnersAndLosersLoading } = useQuery({
	// 	queryKey: ['getTopClaimers'],
	// 	queryFn: () => clientApi.getTopWinnersAndLosers(),
	// })

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
