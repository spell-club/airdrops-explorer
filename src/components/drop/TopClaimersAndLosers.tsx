import React from 'react'
import { Flex } from '@chakra-ui/react'
import Card from '../card/Card'
import DropClaimersTable from './DropClaimersTable'
import useClientApi from '../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'

interface Props {
  dropId: string
  tokenSymbol: string
}

const TopClaimersAndLosers = ({ dropId, tokenSymbol }: Props) => {
  const { clientApi } = useClientApi()
  const { data: claimersData, isLoading } = useQuery({
    queryKey: ['getTopDropClaimers'],
    queryFn: () => clientApi.getAirdropTowWinnersAndLosers(dropId),
  })
  return (
    <Flex gap='20px' mb='20px' flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
      <Card px='0px'>
        <DropClaimersTable
          tableData={claimersData?.winners}
          title='Top Claimers'
          isLoading={isLoading}
          tokenSymbol={tokenSymbol}
        />
      </Card>
      <Card px='0px'>
        <DropClaimersTable
          tableData={claimersData?.losers}
          title='Top Losers'
          isLoading={isLoading}
          tokenSymbol={tokenSymbol}
        />
      </Card>
    </Flex>
  )
}

export default TopClaimersAndLosers
