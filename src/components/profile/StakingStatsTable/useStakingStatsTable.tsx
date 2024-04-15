import { useState } from 'react'
import {
	SortingState,
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { Flex, Text } from '@chakra-ui/react'

import { RowObj } from '.'

export const useStakingStatsTable = (data?: RowObj[]) => {
	const columnHelper = createColumnHelper<RowObj>()

	const [sorting, setSorting] = useState<SortingState>([])

	const columns = [
		columnHelper.accessor('pageName', {
			id: 'pageName',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
					textTransform="uppercase"
				>
					Page Name
				</Text>
			),
			cell: (info: any) => (
				<Flex align="center">
					<Text fontSize="sm" fontWeight="700">
						{info.getValue()}
					</Text>
				</Flex>
			),
		}),
		columnHelper.accessor('visitors', {
			id: 'visitors',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
					textTransform={'uppercase'}
				>
					Visitors
				</Text>
			),
			cell: (info) => (
				<Text fontSize="sm" fontWeight="700">
					{info.getValue()}
				</Text>
			),
		}),
		columnHelper.accessor('uniqueVisitors', {
			id: 'uniqueVisitors',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
					textTransform={'uppercase'}
				>
					Unique Visitors
				</Text>
			),
			cell: (info) => (
				<Text fontSize="sm" fontWeight="700">
					{info.getValue()}
				</Text>
			),
		}),
		columnHelper.accessor('clients', {
			id: 'clients',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
					textTransform={'uppercase'}
				>
					Clients
				</Text>
			),
			cell: (info) => (
				<Flex align="center">
					<Text fontSize="sm" fontWeight="700">
						{info.getValue()}
					</Text>
				</Flex>
			),
		}),
		columnHelper.accessor('bounceRate', {
			id: 'bounceRate',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
					textTransform={'uppercase'}
				>
					Bounce Rate
				</Text>
			),
			cell: (info) => {
				const isNegative = info.getValue() < 0
				return (
					<Flex align="center">
						<Text fontSize="sm" fontWeight="700" color={isNegative ? 'red.500' : 'green.500'}>
							{isNegative ? '' : '+'}
							{info.getValue()}%
						</Text>
					</Flex>
				)
			},
		}),
	]

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true,
	})

	return table
}
