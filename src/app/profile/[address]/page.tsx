'use client'
import React from 'react'
import { Box, Center, Grid, SimpleGrid, Spinner } from '@chakra-ui/react'
import Banner from '../../../components/profile/Banner'
import banner from '../../../img/profile/banner.png'
import NFT6 from '../../../img/nfts/Nft6.png'
import ClaimedUnclaimedChart from '../../../components/profile/ClaimedUnclaimedChart'
import ProfitEstimationChart from '../../../components/profile/ProfitEstimationChart'
import YourAirdropsTable from '../../../components/profile/YourAirdropsTable'
import StakingStatsTable from '../../../components/profile/StakingStatsTable'
import useClientApi from '../../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import AssetsTable from '../../../components/profile/AssetsTable'

const Page = ({ params }: { params: { address: string } }) => {
  const { address } = params
  const { clientApi } = useClientApi()

  const { data: addressInfo, isLoading: isAddressInfoLoading } = useQuery({
    queryKey: ['profile', address],
    queryFn: () => clientApi.getAddressInfo(address),
  })

  if (isAddressInfoLoading) {
    return (
      <Center my={50}>
        <Spinner />
      </Center>
    )
  }

  return (
    <Box mb='40px'>
      <Banner
        banner={banner.src}
        avatar={NFT6}
        name={address}
        claimedDrops={addressInfo?.claimed_airdrops}
        missedDrops={addressInfo?.unclaimed_airdrops}
      />
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap='20px' mb='20px'>
        <ClaimedUnclaimedChart address={address} />
        <ProfitEstimationChart
          totalAllocatedUsd={
            addressInfo?.total_claimed_usd + addressInfo?.total_unclaimed_usd
          }
          totalClaimedUsd={addressInfo?.total_claimed_usd}
        />
      </SimpleGrid>

      <Grid gridTemplateColumns={{ xl: '0.4fr 1fr' }} gap='20px' mb='20px'>
        <YourAirdropsTable />
        <StakingStatsTable />
      </Grid>

      <AssetsTable address={address} />
    </Box>
  )
}

export default Page
