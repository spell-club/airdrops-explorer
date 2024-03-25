import React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  Box,
  Flex,
  Icon,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react'
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md'
import Card from '../card/Card'
import Menu from '../menu/MainMenu'

type RowObj = {
  pageName: string
  visitors: number
  uniqueVisitors: number
  clients: number
  bounceRate: number
}

const columnHelper = createColumnHelper<RowObj>()

const TABLE_DATA: RowObj[] = [
  {
    pageName: 'Home',
    visitors: 1000,
    uniqueVisitors: 800,
    clients: 100,
    bounceRate: -50,
  },
  {
    pageName: 'About',
    visitors: 2000,
    uniqueVisitors: 1500,
    clients: 200,
    bounceRate: 30,
  },
  {
    pageName: 'Services',
    visitors: 3000,
    uniqueVisitors: 2500,
    clients: 300,
    bounceRate: -20,
  },
  {
    pageName: 'Contact',
    visitors: 4000,
    uniqueVisitors: 3500,
    clients: 400,
    bounceRate: 10,
  },
  {
    pageName: 'About',
    visitors: 2000,
    uniqueVisitors: 1500,
    clients: 200,
    bounceRate: -30,
  },
  {
    pageName: 'Services',
    visitors: 3000,
    uniqueVisitors: 2500,
    clients: 300,
    bounceRate: 20,
  },
  {
    pageName: 'Contact',
    visitors: 4000,
    uniqueVisitors: 3500,
    clients: 400,
    bounceRate: -10,
  },
]

const StakingStatsTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  let defaultData = TABLE_DATA
  const columns = [
    columnHelper.accessor('pageName', {
      id: 'pageName',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
          textTransform='uppercase'
        >
          Page Name
        </Text>
      ),
      cell: (info: any) => (
        <Flex align='center'>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('visitors', {
      id: 'visitors',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
          textTransform={'uppercase'}
        >
          Visitors
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('uniqueVisitors', {
      id: 'uniqueVisitors',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
          textTransform={'uppercase'}
        >
          Unique Visitors
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('clients', {
      id: 'clients',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
          textTransform={'uppercase'}
        >
          Clients
        </Text>
      ),
      cell: (info) => (
        <Flex align='center'>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {info.getValue()}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('bounceRate', {
      id: 'bounceRate',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
          textTransform={'uppercase'}
        >
          Bounce Rate
        </Text>
      ),
      cell: (info) => {
        const isNegative = info.getValue() < 0
        return (
          <Flex align='center'>
            <Text
              fontSize='sm'
              fontWeight='700'
              color={isNegative ? 'red.500' : 'green.500'}
            >
              {isNegative ? '' : '+'}
              {info.getValue()}%
            </Text>
          </Flex>
        )
      },
    }),
  ]
  const [data, setData] = React.useState(() => [...defaultData])
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
  return (
    <Card
      flexDirection='column'
      px='0px'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex px='25px' mb='8px' justifyContent='space-between' align='center'>
        <Text
          color={textColor}
          fontSize='22px'
          fontWeight='700'
          lineHeight='100%'
        >
          Atom staking stats
        </Text>
      </Flex>
      <Box>
        <Table variant='simple' color='gray.500' mb='24px' mt='12px'>
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th
                      key={header.id}
                      colSpan={header.colSpan}
                      pe='10px'
                      borderColor={borderColor}
                      cursor='pointer'
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
              .rows.slice(0, 6)
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

export default StakingStatsTable
