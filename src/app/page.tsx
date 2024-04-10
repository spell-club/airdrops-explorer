'use client'
import { Flex, Grid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import DropsList from '../components/main/DropsList'
import ProjectsDynamicChart from 'components/main/ProjectsDynamicChart'
import MiniStatisticsGrid from '../components/main/MiniStatisticsGrid'
import TopClaimersAndLosers from 'components/main/TopClaimersAndLosers'

export default function Home({}) {
	useEffect(() => {
		const localStorageTheme = localStorage.getItem('chakra-ui-color-mode')
		console.log(localStorageTheme)
		if (localStorageTheme === 'light') {
			localStorage.setItem('chakra-ui-color-mode', 'dark')
		}
	}, [])

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

				{/*<Banner />*/}
			</Flex>

			<TopClaimersAndLosers />
		</Grid>
	)
}
