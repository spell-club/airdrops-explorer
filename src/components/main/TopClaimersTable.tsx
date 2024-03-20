'use client'
import * as React from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table'
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
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
import NFT1 from 'img/nfts/Nft1.png'
import NFT2 from 'img/nfts/Nft2.png'
import { useRouter } from 'next/navigation'

type RowObj = {
  address: string
  chains: string[] | any[]
  value: number
}

const columnHelper = createColumnHelper<RowObj>()

const TopClaimersTable = (props: { tableData: any; title: string }) => {
  const { tableData } = props
  const [sorting, setSorting] = React.useState<SortingState>([])
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white')
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  let defaultData = tableData
  const isLosers = props.title === 'Top Losers'
  const { push } = useRouter()
  const columns = [
    columnHelper.accessor('address', {
      id: 'address',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          ADDRESS
        </Text>
      ),
      cell: (info: any) => {
        const trucatedAddress = `${info.getValue().slice(0, 6)}...${info.getValue().slice(-4)}`
        return (
          <Flex
            align='center'
            onClick={() => push('/profile')}
            cursor='pointer'
          >
            <Avatar
              src={isLosers ? NFT1.src : NFT2.src}
              w='30px'
              h='30px'
              me='8px'
            />
            <Text color={textColor} fontSize='sm' fontWeight='600'>
              {trucatedAddress}
            </Text>
          </Flex>
        )
      },
    }),
    columnHelper.accessor('chains', {
      id: 'chains',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          CHAINS
        </Text>
      ),
      cell: (info) => (
        <AvatarGroup
          max={3}
          size='sm'
          mt={{
            base: '0px',
            md: '10px',
            lg: '0px',
            xl: '10px',
            '2xl': '0px',
          }}
          fontSize='12px'
        >
          {info.getValue().map((avt, key) => (
            <Avatar key={key} h={'32px'} w={'32px'} src={avt.src} />
          ))}
        </AvatarGroup>
      ),
    }),
    columnHelper.accessor('value', {
      id: 'value',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          VALUE
        </Text>
      ),
      cell: (info) => (
        <Flex align='center' color='black'>
          <Text>${info.getValue()}</Text>
        </Flex>
      ),
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
    <Flex
      direction='column'
      w='100%'
      overflowX={{ sm: 'scroll', lg: 'hidden' }}
    >
      <Flex
        align={{ sm: 'flex-start', lg: 'center' }}
        justify='space-between'
        w='100%'
        px='22px'
        pb='20px'
        mb='10px'
        boxShadow='0px 40px 58px -20px rgba(112, 144, 176, 0.26)'
      >
        <Text color={textColor} fontSize='xl' fontWeight='600'>
          {props.title}
        </Text>
        <Button variant='action'>See all</Button>
      </Flex>
      <Box>
        <Table variant='simple' color='gray.500' mt='12px'>
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
              .rows.slice(0, 11)
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
    </Flex>
  )
}

export default TopClaimersTable
