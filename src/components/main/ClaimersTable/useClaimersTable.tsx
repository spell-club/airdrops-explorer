import { useState } from 'react'
import {
	SortingState,
	createColumnHelper,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { Avatar, AvatarGroup, Flex, Link, Text } from '@chakra-ui/react'
import { Roboto_Mono } from 'next/font/google'
import numbro from 'numbro'

import { generateIcon, getStaticImageLink, roundToPrecision } from 'utils'
import IconWithBg from 'components/UI/icon/iconWithBg'
import { RowObj } from '.'

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'block',
	preload: true,
})

export const useDropClaimersTable = (data: RowObj[]) => {
	const columnHelper = createColumnHelper<RowObj>()

	const [sorting, setSorting] = useState<SortingState>([])

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
					Address
				</Text>
			),
			cell: (info) => {
				const trucatedAddress = `${info.getValue().slice(0, 6)}...${info.getValue().slice(-6)}`
				const icon = generateIcon(info.row.original.address, 30)
				return (
					<Link href={`/profile/${info.getValue()}`}>
						<Flex align="center" cursor="pointer">
							<IconWithBg icon={icon} boxSize="32px" me="8px" alt="Address" />

							<Text fontSize="sm" fontWeight="600">
								{trucatedAddress}
							</Text>
						</Flex>
					</Link>
				)
			},
		}),
		columnHelper.accessor('projects', {
			id: 'chains',
			header: () => (
				<Text
					justifyContent="space-between"
					align="center"
					fontSize={{ sm: '10px', lg: '12px' }}
					color="gray.400"
				>
					Networks
				</Text>
			),
			cell: (info) => {
				const value = info.getValue()
				return (
					<AvatarGroup
						max={3}
						size="sm"
						mt={{
							base: '0px',
							md: '10px',
							lg: '0px',
							xl: '10px',
							'2xl': '0px',
						}}
						fontSize="12px"
					>
						{value.map((avt, key) => (
							<Avatar
								key={key}
								h={'32px'}
								w={'32px'}
								src={getStaticImageLink(avt.project.toLowerCase())}
							/>
						))}
					</AvatarGroup>
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
					Airdrop
				</Text>
			),
			cell: (info) => {
				const value = info.getValue()
				const roundFormat = {
					trimMantissa: true,
					thousandSeparated: true,
				}

				const truncatedAmount = roundToPrecision({
					value,
					precision: 0,
					method: 'floor',
				})

				const formattedValue = String(numbro(truncatedAmount).format(roundFormat))

				return (
					<Flex align="center" fontWeight={600} className={robotoMono.className}>
						<Text>${formattedValue}</Text>
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
