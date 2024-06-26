import {
	Flex,
	Table as ChakraTable,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react'
import { HeaderGroup, RowModel, flexRender } from '@tanstack/react-table'

interface Props<T> {
	getHeaderGroups: () => HeaderGroup<T>[]
	getRowModel: () => RowModel<T>
}

export const Table = <T,>({ getHeaderGroups, getRowModel }: Props<T>) => {
	return (
		<TableContainer>
			<ChakraTable variant="simple">
				<Thead>
					{getHeaderGroups().map((headerGroup) => (
						<Tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<Th
										key={header.id}
										fontWeight="normal"
										colSpan={header.colSpan}
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
								)
							})}
						</Tr>
					))}
				</Thead>

				<Tbody>
					{getRowModel()
						.rows.slice()
						.map((row) => {
							return (
								<Tr key={row.id}>
									{row.getVisibleCells().map((cell) => {
										return (
											<Td
												key={cell.id}
												fontSize={{ sm: '14px' }}
												minW={{ sm: '135px', md: '200px', lg: 'auto' }}
												borderColor="transparent"
											>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</Td>
										)
									})}
								</Tr>
							)
						})}
				</Tbody>
			</ChakraTable>
		</TableContainer>
	)
}
