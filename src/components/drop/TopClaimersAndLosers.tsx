import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import Card from '../card/Card'
import DropClaimersTable from './DropClaimersTable'
import { GetTopWinnersAndLosersResponse, TopParticipantByProject } from 'api/types'

interface Props {
	tokenSymbol: string
	claimersData: GetTopWinnersAndLosersResponse<TopParticipantByProject>
}

const TopClaimersAndLosers = ({ tokenSymbol, claimersData }: Props) => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (claimersData) {
			setIsLoading(false)
		}
	}, [claimersData])

	const isWinnersEmpty = !claimersData?.winners?.length && !isLoading
	const isLosersEmpty = !claimersData?.losers?.length && !isLoading

	return (
		<Flex gap="20px" mb="20px" flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
			{isWinnersEmpty ? null : (
				<Card px="0px">
					<DropClaimersTable
						tableData={claimersData?.winners}
						title="Top Claimers"
						isLoading={isLoading}
						tokenSymbol={tokenSymbol}
					/>
				</Card>
			)}
			{isLosersEmpty ? null : (
				<Card px="0px">
					<DropClaimersTable
						tableData={claimersData?.losers}
						title="Top Losers"
						isLoading={isLoading}
						tokenSymbol={tokenSymbol}
					/>
				</Card>
			)}
		</Flex>
	)
}

export default TopClaimersAndLosers
