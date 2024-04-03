import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from '../../card/Card'
import useAssetsTable from './useAssetsTable'
import useClientApi from '../../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'

interface Props {
  address: string
}
const AirdropsTable = ({ address }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const { columns } = useAssetsTable()
  const { clientApi } = useClientApi()
  const { data: airdrops, isLoading: isAssetsLoading } = useQuery({
    queryKey: ['addressAirdrops', address],
    queryFn: () => clientApi.getAddressAirdrops(address),
  })

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

  return (
    <Card
      flexDirection='column'
      w='100%'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex
        align={{ sm: 'flex-start', lg: 'center' }}
        justify='space-between'
        w='100%'
        px='22px'
        pb='10px'
      >
        <Text fontSize='xl' fontWeight='600'>
          Airdrops Table
        </Text>
      </Flex>
      <Box>
        <Table variant='simple'>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      fontWeight='normal'
                      colSpan={header.colSpan}
                      // pe='10px'
                      border='none'
                      cursor='pointer'
                      textTransform='none'
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <Flex
                        justifyContent='space-between'
                        align='center'
                        fontSize={{ sm: '10px', lg: '12px' }}
                        color='gray.400'
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
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
                          borderColor='transparent'
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </Td>
                      )
                    })}
                  </Tr>
                )
              })}
          </Tbody>
        </Table>
      </Box>
    </Card>
  )
}

export default AirdropsTable
