import { useState } from 'react'
import {
	SortingState,
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { Flex, Link, Text, useColorModeValue, useMediaQuery } from '@chakra-ui/react'

import { AddressAirdrop } from 'api/types'
import { formatValue } from 'utils'

export const useAirdropsTable = (airdrops?: AddressAirdrop[]) => {
	const columnHelper = createColumnHelper<AddressAirdrop>()

	const textColor = useColorModeValue('secondaryGray.900', 'white')

	const [sorting, setSorting] = useState<SortingState>([])
	const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

	const columns = [
		columnHelper.accessor('name', {
			id: 'name',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Name
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{info.getValue()}
				</Text>
			),
		}),

		columnHelper.accessor('address', {
			id: 'address',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Address
				</Text>
			),
			cell: (info) => {
				const value = info.getValue()
				const explorerLink = `https://www.mintscan.io/${info.row.original.name.toLowerCase()}/address/${value}`
				const truncatedAddress = `${value.slice(0, 4)}...${value.slice(-4)}`

				return (
					<Link isExternal href={explorerLink} target="_blank" rel="noreferer noopener">
						<Text
							color={textColor}
							fontSize="sm"
							fontWeight="700"
							_hover={{ textDecor: 'underline' }}
						>
							{isLargerThan600 ? value : truncatedAddress}
						</Text>
					</Link>
				)
			},
		}),

		columnHelper.accessor('airdrop_timestamp', {
			id: 'airdrop_timestamp',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Date
				</Text>
			),
			cell: (info) => (
				<Text color={textColor} fontSize="sm" fontWeight="700">
					{new Date(info.getValue()).toLocaleDateString()}
				</Text>
			),
		}),

		columnHelper.accessor('allocated_amount', {
			id: 'allocated_amount',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Allocated Amount
				</Text>
			),
			cell: (info) => {
				const { allocated_amount_usd, allocated_amount, token_name } = info.row.original
				return (
					<Flex align="center" gap={2}>
						<Text color={textColor} fontSize="sm" fontWeight="700">
							{formatValue(allocated_amount, 0)} {token_name}
						</Text>

						<Text>(${formatValue(allocated_amount_usd, 0, true)})</Text>
					</Flex>
				)
			},
		}),
		columnHelper.accessor('claimed_amount', {
			id: 'claimed_amount',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Claimed Amount
				</Text>
			),
			cell: (info) => {
				const { claimed_amount_usd, claimed_amount, token_name } = info.row.original

				return (
					<Flex align="center" gap={2}>
						<Text fontSize="sm" fontWeight="700">
							{formatValue(claimed_amount, 0)} {token_name}
						</Text>

						<Text>(${formatValue(claimed_amount_usd, 0, true)})</Text>
					</Flex>
				)
			},
		}),

		columnHelper.accessor('token_name', {
			id: 'token_name',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Missed Amount
				</Text>
			),
			cell: (info) => {
				const {
					claimed_amount_usd,
					claimed_amount,
					allocated_amount,
					allocated_amount_usd,
					token_name,
				} = info.row.original

				const missed_amount = allocated_amount - claimed_amount
				const missed_amount_usd = allocated_amount_usd - claimed_amount_usd
				const isPositive = Number(missed_amount.toFixed()) > 0

				return (
					<Flex align="center" gap={2} color={isPositive ? 'red.500' : 'inherit'}>
						<Text fontSize="sm" fontWeight="700">
							{formatValue(missed_amount, 0)} {token_name}
						</Text>

						<Text>(${formatValue(missed_amount_usd, 0, true)})</Text>
					</Flex>
				)
			},
		}),
	]

	const table = useReactTable({
		data: airdrops ?? [],
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
