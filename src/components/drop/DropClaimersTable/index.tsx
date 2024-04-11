import { Flex, Text } from '@chakra-ui/react'

import { useDropClaimersTable } from './useDropClaimersTable'
import { Table } from 'components/UI/Table'

export type RowObj = {
	address: string
	projects: Record<'project', string>[]
	total_amount_usd: number
	total_amount: number
}

interface Props {
	tableData: RowObj[]
	title: string
	isLoading: boolean
	tokenSymbol: string
}

const DropClaimersTable = ({ tableData, title, isLoading, tokenSymbol }: Props) => {
	const { rows, headers } = useDropClaimersTable(tableData, tokenSymbol)

	return (
		<Flex direction="column" w="100%" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
			<Flex
				align={{ sm: 'flex-start', lg: 'center' }}
				justify="space-between"
				w="100%"
				px="22px"
				pb="10px"
			>
				<Text fontSize="xl" fontWeight="600">
					{title}
				</Text>
			</Flex>

			<Table rows={rows} headers={headers} />
		</Flex>
	)
}

export default DropClaimersTable
