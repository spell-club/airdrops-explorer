'use client'
import React from 'react'
import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import Banner from 'components/drop/Banner'
import banner from 'assets/img/auth/banner.png'
import General from 'components/drop/General'
import DropConversionChartCard from 'components/drop/DropConversionChartCard'
import DropDynamicChart from 'components/drop/DropDynamicChart'
import { useQuery } from '@tanstack/react-query'
import useClientApi from 'hooks/useClientApi'
import TopClaimersAndLosers from 'components/drop/TopClaimersAndLosers'
import { formatValue, getStaticImageLink } from 'utils'

const Page = ({ params }: { params: { dropId: string } }) => {
	const { dropId } = params
	const { clientApi } = useClientApi()
	const { data: airdropProject, isLoading: isAirdropProjectLoading } = useQuery({
		queryKey: ['drop', dropId],
		queryFn: () => clientApi.getAirdropProject(dropId),
	})

	if (isAirdropProjectLoading) {
		return (
			<Center my={50}>
				<Spinner />
			</Center>
		)
	}

	return (
		<Box mb={5}>
			<Banner
				banner={banner.src}
				avatar={getStaticImageLink(airdropProject?.name.toLowerCase())}
				name={airdropProject?.name}
				airdropDate={new Date(airdropProject?.airdrop_timestamp).toLocaleDateString()}
				snapshotDate={new Date(airdropProject?.snapshot_date).toLocaleDateString()}
				users={formatValue(airdropProject?.claimers_num, 0)}
			/>

			<Flex gap="20px" mb="20px" flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
				<DropDynamicChart dropId={dropId} tokenSymbol={airdropProject?.token_symbol} />
				<DropConversionChartCard project={airdropProject} />
			</Flex>

			<TopClaimersAndLosers dropId={dropId} tokenSymbol={airdropProject?.token_symbol} />

			<General description={airdropProject?.description} />
		</Box>
	)
}

export default Page
