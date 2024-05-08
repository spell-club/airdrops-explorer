'use client'
import { Box, Flex } from '@chakra-ui/react'
import Banner from 'components/drop/Banner'
import banner from 'assets/img/auth/banner.png'
import General from 'components/drop/General'
import DropConversionChartCard from 'components/drop/DropConversionChartCard/index'
import DropDynamicChart from 'components/drop/DropDynamicChart'
import TopClaimersAndLosers from 'components/drop/TopClaimersAndLosers'
import { formatValue, getStaticImageLink } from 'utils'
import ScrollToTop from 'components/ScrollToTop'
import Loader from 'components/UI/loader'
import {
	AirdropProject,
	GetTopWinnersAndLosersResponse,
	HistoricalValue,
	TopParticipantByProject,
} from 'api/types'
import { useEffect, useState } from 'react'

interface Props {
	airdropProject: AirdropProject
	chartData: HistoricalValue[]
	dropId: string
	claimersData: GetTopWinnersAndLosersResponse<TopParticipantByProject>
}

const Page = ({ airdropProject, claimersData, chartData }: Props) => {
	const [isAirdropProjectLoading, setIsAirdropProjectLoading] = useState(true)

	useEffect(() => {
		if (airdropProject) {
			setIsAirdropProjectLoading(false)
		}
	}, [airdropProject])

	if (isAirdropProjectLoading) {
		return <Loader my={50} />
	}

	return (
		<Box mb={5}>
			<ScrollToTop />
			<Banner
				banner={banner.src}
				avatar={getStaticImageLink(airdropProject?.name.toLowerCase(), true)}
				name={airdropProject?.name}
				airdropDate={new Date(airdropProject?.airdrop_timestamp).toLocaleDateString()}
				snapshotDate={new Date(airdropProject?.snapshot_date).toLocaleDateString()}
				users={formatValue(airdropProject?.claimers_num, 0)}
			/>

			<Flex gap="20px" mb="20px" flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
				<DropDynamicChart chartData={chartData} tokenSymbol={airdropProject?.token_symbol} />

				<DropConversionChartCard project={airdropProject} />
			</Flex>

			<TopClaimersAndLosers
				claimersData={claimersData}
				tokenSymbol={airdropProject?.token_symbol}
			/>

			<General description={airdropProject?.description} />
		</Box>
	)
}

export default Page
