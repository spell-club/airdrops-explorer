'use client'
import React from 'react'
import { Box, Flex, Grid, SimpleGrid } from '@chakra-ui/react'
import Banner from '../../components/drop/Banner'
import banner from '../../img/auth/banner.png'
import Storage from '../../views/admin/profile/components/Storage'
import Upload from '../../views/admin/profile/components/Upload'
import Projects from '../../views/admin/profile/components/Projects'
import General from '../../components/drop/General'
import Notifications from '../../views/admin/profile/components/Notifications'
import NFT6 from 'img/nfts/Nft6.png'
import avatar from 'img/avatars/avatar4.png'
import Card from '../../components/card/Card'
import TopClaimersTable from '../../components/main/TopClaimersTable'
import { tableColumnsTopClaimers } from '../../views/admin/marketplace/variables/tableDataTopCreators'
import DailyTraffic from '../../views/admin/default/components/DailyTraffic'
import PieCard from '../../views/admin/default/components/PieCard'

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
      <Flex gap='20px' align="start">
        <Flex flexDir='column' gap={5}>
          <General pe='20px' w={700} />
          <Card px='0px' mb='20px'>
            <TopClaimersTable
              title='Top Claimers'
              tableData={tableColumnsTopClaimers}
            />
          </Card>
        </Flex>

        <PieCard />
      </Flex>
    </Box>
  )
}

export default Page
