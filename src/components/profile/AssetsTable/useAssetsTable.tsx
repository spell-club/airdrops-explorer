import { createColumnHelper } from '@tanstack/react-table'
import { AddressAsset } from '../../../api/types'
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
  const columnHelper = createColumnHelper<AddressAsset>()
  const textColor = useColorModeValue('secondaryGray.900', 'white')

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
          Address
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
    columnHelper.accessor('chain_name', {
      id: 'chain_name',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Chain
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
          <Avatar
            h={'32px'}
            w={'32px'}
            src={AIRDROPS_IMAGES[info.getValue().toLowerCase()]}
          />
        </AvatarGroup>
      ),
    }),

    columnHelper.accessor('total_claimed', {
      id: 'total_claimed',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Total Claimed
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize='sm' fontWeight='700'>
          {formatValue(info.getValue(), 0)} {info.row.original.token_name}
        </Text>
      ),
    }),
    columnHelper.accessor('total_unclaimed', {
      id: 'total_unclaimed',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Total Unclaimed
        </Text>
      ),
      cell: (info) => (
        <Flex w='100%' justify='start' px={10}>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            {formatValue(info.getValue())} {info.row.original.token_name}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('total_claimed_usd', {
      id: 'total_claimed_usd',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Total Claimed USD
        </Text>
      ),
      cell: (info) => (
        <Flex w='100%' justify='start' px={10}>
          <Text color={textColor} fontSize='sm' fontWeight='700'>
            ${formatValue(info.getValue(), 0)}
          </Text>
        </Flex>
      ),
    }),
    columnHelper.accessor('total_unclaimed_usd', {
      id: 'total_unclaimed_usd',
      header: () => (
        <Text
          justifyContent='space-between'
          align='center'
          fontSize={{ sm: '10px', lg: '12px' }}
          color='gray.400'
        >
          Total Unclaimed USD
        </Text>
      ),
      cell: (info) => (
        <Flex w='100%' justify='start' px={10}>
          <Text
            color={textColor}
            fontSize='sm'
            textAlign='center'
            fontWeight='700'
          >
            ${formatValue(info.getValue(), 0)}
          </Text>
        </Flex>
      ),
    }),
  ]

  return { columns }
}

export default useAssetsTable
