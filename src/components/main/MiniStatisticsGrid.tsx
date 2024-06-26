import { useMemo } from 'react'
import { Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { MdAttachMoney, MdSupervisedUserCircle } from 'react-icons/md'

import IconBox from 'components/UI/icon/iconBox'
import { formatValue } from 'utils'
import MiniStatistics from 'components/card/MiniStatistics'
import { Stats } from 'api/types'

interface Props {
	stats: Stats
}

const MiniStatisticsGrid = ({ stats }: Props) => {
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')

	const { totalClaimed, totalAllocated, users } = useMemo(() => {
		if (!stats) {
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
	}, [stats])

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
