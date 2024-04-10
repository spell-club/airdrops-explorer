import React, { useMemo } from 'react'
import { Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import IconBox from '../icons/IconBox'
import { MdAttachMoney, MdSupervisedUserCircle } from 'react-icons/md'
import { formatValue } from '../../utils'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../hooks/useClientApi'
import MiniStatistics from 'components/card/MiniStatistics'

const MiniStatisticsGrid = () => {
	const { clientApi } = useClientApi()
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
	const { data: stats, isLoading: isStatsLoading } = useQuery({
		queryKey: ['stats'],
		queryFn: () => clientApi.getStats(),
	})

	const { totalClaimed, totalAllocated, users } = useMemo(() => {
		if (isStatsLoading || !stats) {
			return {
				totalAllocated: '$0',
				totalClaimed: '$0',
				users: 0,
			}
		}

		return {
			totalAllocated: formatValue(stats.total_allocated_usd, 0),

			totalClaimed: formatValue(stats.total_claimed_usd, 0),

			users: formatValue(stats.eligible_users_num, 0),
		}
	}, [stats, isStatsLoading])

	return (
		<SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }} gap="20px">
			<MiniStatistics
				startContent={
					<IconBox
						w="56px"
						h="56px"
						bg={boxBg}
						icon={<Icon w="32px" h="32px" as={MdAttachMoney} color="brand.500" />}
					/>
				}
				name="Total Allocated"
				value={totalAllocated}
			/>
			<MiniStatistics
				startContent={
					<IconBox
						w="56px"
						h="56px"
						bg={boxBg}
						icon={<Icon w="32px" h="32px" as={MdAttachMoney} color="brand.500" />}
					/>
				}
				name="Total Claimed"
				value={totalClaimed}
			/>

			<MiniStatistics
				startContent={
					<IconBox
						w="56px"
						h="56px"
						bg={boxBg}
						icon={<Icon w="32px" h="32px" as={MdSupervisedUserCircle} color="brand.500" />}
					/>
				}
				name="Wallets"
				value={users}
			/>
		</SimpleGrid>
	)
}

export default MiniStatisticsGrid
