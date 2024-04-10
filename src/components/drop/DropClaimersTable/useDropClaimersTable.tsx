import { useState } from 'react'
import {
	SortingState,
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { Flex, Link, Text } from '@chakra-ui/react'
import { Roboto_Mono } from 'next/font/google'
import numbro from 'numbro'

import { generateIcon, roundToPrecision } from 'utils'
import IconWithBg from 'components/UI/icon/iconWithBg'
import { RowObj } from '.'

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'block',
	preload: true,
})

export const useDropClaimersTable = (data: RowObj[], tokenSymbol: string) => {
	const columnHelper = createColumnHelper<RowObj>()

	const [sorting, setSorting] = useState<SortingState>([])

	const formatValue = (value: number) => {
		const roundFormat = {
			trimMantissa: true,
			thousandSeparated: true,
		}

		const truncatedAmount = roundToPrecision({
			value,
			precision: 0,
			method: 'floor',
		})

		return String(numbro(truncatedAmount).format(roundFormat))
	}

	const columns = [
		columnHelper.accessor('address', {
			id: 'address',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					ADDRESS
				</Text>
			),
			cell: (info: any) => {
				const truncatedAddress = `${info.getValue().slice(0, 8)}...${info.getValue().slice(-8)}`
				const icon = generateIcon(info.row.original.address, 30)

				return (
					<Link href={`/profile/${info.getValue()}`}>
						<Flex align="center" cursor="pointer">
							<IconWithBg icon={icon} boxSize="32px" me="8px" alt="Address" />

							<Text fontSize="sm" fontWeight="600">
								{truncatedAddress}
							</Text>
						</Flex>
					</Link>
				)
			},
		}),
		columnHelper.accessor('total_amount', {
			id: 'total_amount',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					AMOUNT
				</Text>
			),
			cell: (info) => {
				const value = info.getValue()
				return (
					<Flex fontWeight={600} className={robotoMono.className}>
						<Text>
							{formatValue(value)} {tokenSymbol}
						</Text>
					</Flex>
				)
			},
		}),
		columnHelper.accessor('total_amount_usd', {
			id: 'total_amount_usd',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					VALUE
				</Text>
			),
			cell: (info) => {
				const value = info.getValue()

				return (
					<Flex align="center" fontWeight={600} className={robotoMono.className}>
						<Text>${formatValue(value)}</Text>
					</Flex>
				)
			},
		}),
	]

	const table = useReactTable({
		data: data ?? [],
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true,
	})

	const headers = table.getHeaderGroups()
	const rows = table.getRowModel()

	return { ...table, headers, rows }
}
