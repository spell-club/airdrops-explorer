'use client';
import * as React from 'react';
import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	SortingState,
	useReactTable,
} from '@tanstack/react-table';
import {
	Avatar,
	AvatarGroup,
	Flex,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { generateIcon, roundToPrecision } from 'utils';
import numbro from 'numbro';
import { AIRDROPS_IMAGES } from 'constants/index';
import IconWithBg from 'components/IconWithBg';

type RowObj = {
	address: string;
	projects: Record<'project', string>[];
	total_amount_usd: number;
};
const columnHelper = createColumnHelper<RowObj>();

interface Props {
	tableData: RowObj[];
	title: string;
	isLoading: boolean;
}

import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';

const robotoMono = Roboto_Mono({
	subsets: ['latin'],
	display: 'block',
	preload: true,
});

const ClaimersTable = ({ tableData, title, isLoading }: Props) => {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const { push } = useRouter();

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
				const trucatedAddress = `${info.getValue().slice(0, 6)}...${info.getValue().slice(-6)}`;
				const icon = generateIcon(info.row.original.address, 30);
				return (
					<Link href={`/profile/${info.getValue()}`}>
						<Flex align="center" cursor="pointer">
							<IconWithBg icon={icon} boxSize="32px" me="8px" />
							<Text fontSize="sm" fontWeight="600">
								{trucatedAddress}
							</Text>
						</Flex>
					</Link>
				);
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
				const value = info.getValue();
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
								src={AIRDROPS_IMAGES[avt.project.toLowerCase()]}
							/>
						))}
					</AvatarGroup>
				);
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
				const value = info.getValue();
				const roundFormat = {
					trimMantissa: true,
					thousandSeparated: true,
				};

				const truncatedAmount = roundToPrecision({
					value,
					precision: 0,
					method: 'floor',
				});

				const formattedValue = String(numbro(truncatedAmount).format(roundFormat));

				return (
					<Flex align="center" fontWeight={600} className={robotoMono.className}>
						<Text>${formattedValue}</Text>
					</Flex>
				);
			},
		}),
	];
	const table = useReactTable({
		data: tableData ?? [],
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true,
	});

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
			<TableContainer>
				<Table variant="simple">
					<Thead>
						{table.getHeaderGroups().map((headerGroup) => (
							<Tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<Th
											key={header.id}
											fontWeight="normal"
											colSpan={header.colSpan}
											// pe='10px'
											border="none"
											cursor="pointer"
											textTransform="none"
											onClick={header.column.getToggleSortingHandler()}
										>
											<Flex
												justifyContent="space-between"
												align="center"
												fontSize={{ sm: '10px', lg: '12px' }}
												color="gray.400"
											>
												{flexRender(header.column.columnDef.header, header.getContext())}
												{{
													asc: '',
													desc: '',
												}[header.column.getIsSorted() as string] ?? null}
											</Flex>
										</Th>
									);
								})}
							</Tr>
						))}
					</Thead>
					<Tbody>
						{table
							.getRowModel()
							.rows.slice()
							.map((row) => {
								return (
									<Tr key={row.id}>
										{row.getVisibleCells().map((cell) => {
											return (
												<Td
													key={cell.id}
													fontSize={{ sm: '14px' }}
													minW={{ sm: '150px', md: '200px', lg: 'auto' }}
													borderColor="transparent"
												>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</Td>
											);
										})}
									</Tr>
								);
							})}
					</Tbody>
				</Table>
			</TableContainer>
		</Flex>
	);
};

export default ClaimersTable;
