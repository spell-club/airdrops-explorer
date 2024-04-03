'use client'
import React from 'react'
import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import Banner from 'components/drop/Banner'
import banner from 'img/auth/banner.png'
import General from 'components/drop/General'
import DropConversionChartCard from 'components/drop/DropConversionChartCard'
import DropDynamicChart from 'components/drop/DropDynamicChart'
import { useQuery } from '@tanstack/react-query'
import useClientApi from 'hooks/useClientApi'
import { AIRDROPS_IMAGES } from 'constants/index'
import TopClaimersAndLosers from 'components/drop/TopClaimersAndLosers'
import { formatValue } from 'utils'

const Page = ({ params }: { params: { dropId: string } }) => {
  const { dropId } = params
  const { clientApi } = useClientApi()
  const { data: airdropProject, isLoading: isAirdropProjectLoading } = useQuery(
    {
      queryKey: ['drop', dropId],
      queryFn: () => clientApi.getAirdropProject(dropId),
    },
  )

  if (isAirdropProjectLoading) {
    return (
      <Center my={50}>
        <Spinner />
      </Center>
    )
  }

  return (
    <Box mb={5}>
      <Banner
        banner={banner.src}
        avatar={AIRDROPS_IMAGES[airdropProject?.name.toLowerCase()]}
        name={airdropProject?.name}
        airdropDate={new Date(
          airdropProject?.airdrop_timestamp,
        ).toLocaleDateString()}
        snapshotDate={new Date(
          airdropProject?.snapshot_date,
        ).toLocaleDateString()}
        users={formatValue(airdropProject?.users_num, 0)}
      />

      <Flex gap='20px' mb='20px' flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
        <DropDynamicChart dropId={dropId} />
        <DropConversionChartCard
          totalAllocatedUsd={airdropProject?.total_allocated_usd}
          totalClaimedUsd={airdropProject?.total_claimed_usd}
          totalClaimed={airdropProject?.total_claimed}
          totalAllocated={airdropProject?.total_allocated}
          tokenSymbol={airdropProject?.token_symbol}
        />
      </Flex>

      <TopClaimersAndLosers
        dropId={dropId}
        tokenSymbol={airdropProject?.token_symbol}
      />

      <General description={airdropProject?.description} />
    </Box>
  )
}

export default Page
