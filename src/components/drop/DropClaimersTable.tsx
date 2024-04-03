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
import { useRouter } from 'next/navigation'
import useClientApi from '../../hooks/useClientApi'
import NFT1 from '../../img/nfts/Nft1.png'
import NFT2 from '../../img/nfts/Nft2.png'
import { useQuery } from '@tanstack/react-query'
import numbro from 'numbro'
import { generateIcon, roundToPrecision } from '../../utils'
import { AIRDROPS_IMAGES } from '../../constants'
import IconWithBg from '../IconWithBg'

import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'block',
  preload: true,
})

type RowObj = {
  address: string
  projects: Record<'project', string>[]
  total_amount_usd: number
  total_amount: number
}

const columnHelper = createColumnHelper<RowObj>()

interface Props {
  tableData: RowObj[]
  title: string
  isLoading: boolean
  tokenSymbol: string
}
const DropClaimersTable = ({
  tableData,
  title,
  isLoading,
  tokenSymbol,
}: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100')
  const { push } = useRouter()

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
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          ADDRESS
        </Text>
      ),
      cell: (info: any) => {
        const trucatedAddress = `${info.getValue().slice(0, 8)}...${info.getValue().slice(-8)}`
        const icon = generateIcon(info.row.original.address, 30)

        return (
          <Flex
            align='center'
            onClick={() => push(`/profile/${info.getValue()}`)}
            cursor='pointer'
          >
            <IconWithBg icon={icon} boxSize='32px' me='8px' />

            <Text fontSize='sm' fontWeight='600'>
              {trucatedAddress}
            </Text>
          </Flex>
        )
      },
    }),
    columnHelper.accessor('total_amount', {
      id: 'total_amount',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          VALUE TOKENS
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
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          VALUE $
        </Text>
      ),
      cell: (info) => {
        const value = info.getValue()

        return (
          <Flex
            align='center'
            fontWeight={600}
            className={robotoMono.className}
          >
            <Text>${formatValue(value)}</Text>
          </Flex>
        )
      },
    }),
  ]
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
      >
        <Text fontSize='xl' fontWeight='600'>
          {title}
        </Text>
      </Flex>
      <Box>
        <Table variant='simple' mt='12px'>
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
    </Flex>
  )
}

export default DropClaimersTable
