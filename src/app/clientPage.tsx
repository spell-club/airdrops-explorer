'use client'
import { Flex, Grid } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import MiniStatisticsGrid from 'components/main/MiniStatisticsGrid'
import {
	AirdropProject,
	GetTopWinnersAndLosersResponse,
	HistoricalValue,
	Stats,
	TopParticipant,
} from '../api/types'

const DropsList = dynamic(() => import('components/main/DropsList'), {
	ssr: true,
})

const ProjectsDynamicChart = dynamic(() => import('components/main/ProjectsDynamicChart'), {
	ssr: true,
})

const TopClaimersAndLosers = dynamic(() => import('components/main/TopClaimersAndLosers'), {
	ssr: true,
})

const CalculatorBanner = dynamic(() => import('components/main/CalculatorBanner'), {
	ssr: false,
})

interface Props {
	stats: Stats
	history: HistoricalValue[]
	drops: AirdropProject[]
	topWinnersAndLosers: GetTopWinnersAndLosersResponse<TopParticipant>
}

export default function ClientPage({ stats, history, drops, topWinnersAndLosers }: Props) {
	return (
		<Grid
			gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
			gap={{ base: '20px', xl: '20px' }}
			display={{ base: 'block', xl: 'grid' }}
		>
			<Flex flexDirection="column" gap="30px">
				<MiniStatisticsGrid stats={stats} />

				<ProjectsDynamicChart chartData={history} />

				<DropsList airdrops={drops} />

				<CalculatorBanner />
			</Flex>

			<TopClaimersAndLosers topWinnersAndLosers={topWinnersAndLosers} />
		</Grid>
	)
}
