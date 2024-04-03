import { createColumnHelper } from '@tanstack/react-table'
import { AddressAirdrop } from '../../../api/types'
import {
  Avatar,
  AvatarGroup,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import React from 'react'
import { AIRDROPS_IMAGES } from '../../../constants'
import { formatValue } from '../../../utils'

const useAssetsTable = () => {
  const columnHelper = createColumnHelper<AddressAirdrop>()
  const textColor = useColorModeValue('secondaryGray.900', 'white')

  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Airdrop Name
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('token_name', {
      id: 'token_name',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Token Name
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {info.getValue()}
        </Text>
      ),
    }),

    columnHelper.accessor('allocated_amount', {
      id: 'total_claimed',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Allocated Amount
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {formatValue(info.getValue(), 0)} {info.row.original.token_name}
        </Text>
      ),
    }),
    columnHelper.accessor('claimed_amount', {
      id: 'claimed_amount',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Claimed Amount
        </Text>
      ),
      cell: (info) => {
        const isPositive = info.getValue() > 0
        return (
          <Text
            color={!isPositive ? 'red.500' : 'green.500'}
            fontSize='sm'
            fontWeight='700'
          >
            {formatValue(info.getValue())} {info.row.original.token_name}
          </Text>
        )
      },
    }),
    columnHelper.accessor('allocated_amount_usd', {
      id: 'allocated_amount_usd',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Allocated Amount USD
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          ${formatValue(info.getValue(), 0)}
        </Text>
      ),
    }),
    columnHelper.accessor('claimed_amount_usd', {
      id: 'claimed_amount_usd',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Claimed Amount USD
        </Text>
      ),
      cell: (info) => {
        const isPositive = info.getValue() > 0
        return (
          <Text
            color={!isPositive ? 'red.500' : 'green.500'}
            fontSize='sm'
            fontWeight='700'
          >
            ${formatValue(info.getValue(), 0)}
          </Text>
        )
      },
    }),
  ]

  return { columns }
}

export default useAssetsTable
