'use client'
import React from 'react'
import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import Banner from '../../components/profile/Banner'
import banner from '../../img/profile/banner.png'
import NFT6 from '../../img/nfts/Nft6.png'
import TotalSpent from '../../views/admin/default/components/TotalSpent'
import WeeklyRevenue from '../../views/admin/default/components/WeeklyRevenue'
import PieCard from 'views/admin/default/components/PieCard'
import ComplexTable from '../../views/admin/default/components/ComplexTable'
import tableDataComplex from '../../views/admin/default/variables/tableDataComplex'
import Tasks from '../../views/admin/default/components/Tasks'

const Page = () => {
  return (
    <Box>
      {/* Main Fields */}
      <Grid gap={{ base: '20px', xl: '20px' }}>
        <Banner
          banner={banner.src}
          avatar={NFT6}
          name='Celestia'
          job='Dec 2023'
        />
      </Grid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
      </SimpleGrid>

      <ComplexTable tableData={tableDataComplex} />
    </Box>
  )
}

export default Page
