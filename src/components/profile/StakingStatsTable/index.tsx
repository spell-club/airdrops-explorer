import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import Card from '../../card/Card'
import { useStakingStatsTable } from './useStakingStatsTable'
import { Table } from 'components/UI/Table'

export type RowObj = {
	pageName: string
	visitors: number
	uniqueVisitors: number
	clients: number
	bounceRate: number
}

const TABLE_DATA: RowObj[] = [
	{
		pageName: 'Home',
		visitors: 1000,
		uniqueVisitors: 800,
		clients: 100,
		bounceRate: -50,
	},
	{
		pageName: 'About',
		visitors: 2000,
		uniqueVisitors: 1500,
		clients: 200,
		bounceRate: 30,
	},
	{
		pageName: 'Services',
		visitors: 3000,
		uniqueVisitors: 2500,
		clients: 300,
		bounceRate: -20,
	},
	{
		pageName: 'Contact',
		visitors: 4000,
		uniqueVisitors: 3500,
		clients: 400,
		bounceRate: 10,
	},
	{
		pageName: 'About',
		visitors: 2000,
		uniqueVisitors: 1500,
		clients: 200,
		bounceRate: -30,
	},
	{
		pageName: 'Services',
		visitors: 3000,
		uniqueVisitors: 2500,
		clients: 300,
		bounceRate: 20,
	},
	{
		pageName: 'Contact',
		visitors: 4000,
		uniqueVisitors: 3500,
		clients: 400,
		bounceRate: -10,
	},
]

const StakingStatsTable = () => {
	let defaultData = TABLE_DATA

	const [data, setData] = React.useState(() => [...defaultData])

	const { rows, headers } = useStakingStatsTable(data)

	return (
		<Card flexDirection="column" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex px="25px" mb="8px" justifyContent="space-between" align="center">
				<Text fontSize="22px" fontWeight="700" lineHeight="100%">
					Atom staking stats
				</Text>
			</Flex>

			<Table rows={rows} headers={headers} />
		</Card>
	)
}

export default StakingStatsTable
