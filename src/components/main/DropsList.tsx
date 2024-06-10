import React from 'react'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import AirdropProject from '../AirdropProject'
import { getStaticImageLink } from '../../utils'
import Pagination from 'components/UI/pagination'
import usePagination from 'hooks/usePagination'

interface Props {
	airdrops: any[]
}
const DropsList = ({ airdrops }: Props) => {
	const { currentData, currentPage, totalPages, handlePageChange } = usePagination(airdrops)

	return (
		<Flex direction="column">
			<Text fontSize="xl" ms="24px" fontWeight="700" mb="20px">
				Recent Airdrops
			</Text>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
				{currentData?.map((airdrop) => (
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

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				onPageChange={handlePageChange}
			/>
		</Flex>
	)
}

export default DropsList
