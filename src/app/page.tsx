'use client'
import { Flex, Grid } from '@chakra-ui/react'

import DropsList from 'components/main/DropsList'
import MiniStatisticsGrid from 'components/main/MiniStatisticsGrid'
import TopClaimersAndLosers from 'components/main/TopClaimersAndLosers'
import CalculatorBanner from 'components/main/CalculatorBanner'
import ProjectsDynamicChart from 'components/main/ProjectsDynamicChart'

export default function Home() {
	return (
		<Grid
			mb="20px"
			gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
			gap={{ base: '20px', xl: '20px' }}
			display={{ base: 'block', xl: 'grid' }}
		>
			<Flex flexDirection="column" gap="30px">
				<MiniStatisticsGrid />

				<ProjectsDynamicChart />

				<DropsList />

				<CalculatorBanner />
			</Flex>

			<TopClaimersAndLosers />
		</Grid>
	)
}
