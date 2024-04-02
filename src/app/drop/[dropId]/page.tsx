'use client'
import React from 'react'
import { Box, Center, Flex, Grid, Spinner } from '@chakra-ui/react'
import Banner from '../../../components/drop/Banner'
import banner from '../../../img/auth/banner.png'
import General from '../../../components/drop/General'
import DropConversionChartCard from '../../../components/drop/DropConversionChartCard'
import DropDynamicChart from '../../../components/drop/DropDynamicChart'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../../hooks/useClientApi'
import { AIRDROPS_IMAGES } from '../../../constants'
import TopClaimersAndLosers from 'components/drop/TopClaimersAndLosers'

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
        job={new Date(airdropProject?.snapshot_date).toLocaleDateString()}
      />

      <Flex gap='20px' mb='20px' flexWrap={{ base: 'wrap', xl: 'nowrap' }}>
        <DropDynamicChart dropId={dropId} />
        <DropConversionChartCard
          totalAllocated={airdropProject?.total_allocated_usd}
          totalClaimed={airdropProject?.total_claimed_usd}
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
