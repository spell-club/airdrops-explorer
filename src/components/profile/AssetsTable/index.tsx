import { useQuery } from '@tanstack/react-query'
import { Table } from 'components/UI/Table'
import { Flex, Text } from '@chakra-ui/react'

import Card from '../../card/Card'
import { useAirdropsTable } from './useAirdropsTable'
import useClientApi from 'hooks/useClientApi'

interface Props {
	address: string
}
const AirdropsTable = ({ address }: Props) => {
	const { clientApi } = useClientApi()

	const { data: airdrops, isLoading: isAssetsLoading } = useQuery({
		queryKey: ['addressAirdrops', address],
		queryFn: () => clientApi.getAddressAirdrops(address),
		retry: 1,
	})

	const { rows, headers } = useAirdropsTable(airdrops)

	if (!airdrops && !isAssetsLoading) return null

	return (
		<Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex
				align={{ sm: 'flex-start', lg: 'center' }}
				justify="space-between"
				w="100%"
				px="22px"
				pb="10px"
			>
				<Text fontSize="xl" fontWeight="600">
					Airdrops Table
				</Text>
			</Flex>

			<Table rows={rows} headers={headers} />
		</Card>
	)
}

export default AirdropsTable
