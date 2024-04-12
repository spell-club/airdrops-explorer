import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from '../card/Card'
import ClaimersTable from './ClaimersTable'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../hooks/useClientApi'

const TopClaimersAndLosers = () => {
	const { clientApi } = useClientApi()
	const { data: topWinnersAndLosers, isLoading: isWinnersAndLosersLoading } = useQuery({
		queryKey: ['getTopClaimers'],
		queryFn: () => clientApi.getTopWinnersAndLosers(),
	})

	return (
		<Flex flexDirection="column" mt={{ base: '30px', xl: '0' }}>
			<Card px="0px" mb="20px">
				<ClaimersTable
					title="Top Claimers"
					tableData={topWinnersAndLosers?.winners}
					isLoading={isWinnersAndLosersLoading}
				/>
			</Card>

			<Card px="0px" mb="20px">
				<ClaimersTable
					title="Top Losers"
					tableData={topWinnersAndLosers?.losers}
					isLoading={isWinnersAndLosersLoading}
				/>
			</Card>
		</Flex>
	)
}

export default TopClaimersAndLosers
