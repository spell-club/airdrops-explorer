'use client'
import React from 'react'
import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import Banner from '../../components/profile/Banner'
import banner from '../../img/profile/banner.png'
import NFT6 from '../../img/nfts/Nft6.png'
import ComplexTable from '../../views/admin/default/components/ComplexTable'
import tableDataComplex from '../../views/admin/default/variables/tableDataComplex'
import ClaimedUnclaimedChart from '../../components/profile/ClaimedUnclaimedChart'
import ProfitEstimationChart from '../../components/profile/ProfitEstimationChart'
import YourAirdropsTable from '../../components/profile/YourAirdropsTable'
import StakingStatsTable from '../../components/profile/StakingStatsTable'

const Page = () => {
  return (
    <Box mb='40px'>
      <Banner
        banner={banner.src}
        avatar={NFT6}
        name='Celestia'
        job='Dec 2023'
      />
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap='20px' mb='20px'>
        <ClaimedUnclaimedChart />
        <ProfitEstimationChart />
      </SimpleGrid>

      <Grid gridTemplateColumns={{ xl: '0.4fr 1fr' }} gap="20px" mb="20px">
        <YourAirdropsTable />
        <StakingStatsTable />
      </Grid>

      <ComplexTable tableData={tableDataComplex} />
    </Box>
  )
}

export default Page
