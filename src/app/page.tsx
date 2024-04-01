'use client'
import {
  Flex,
  Grid,
  Icon,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import Banner from '../components/main/Banner'
import Card from '../components/card/Card'
import { tableColumnsTopClaimers } from '../views/admin/marketplace/variables/tableDataTopCreators'
import React, { useEffect } from 'react'
import TopClaimersTable from '../components/main/TopClaimersTable'
import DropsList from '../components/main/DropsList'
import MiniStatistics from '../components/card/MiniStatistics'
import IconBox from '../components/icons/IconBox'
import { MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md'
import ProjectsDynamicChart from 'components/main/ProjectsDynamicChart'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../hooks/useClientApi'
import MiniStatisticsGrid from '../components/main/MiniStatisticsGrid'

export default function Home({}) {
  const { clientApi } = useClientApi()
  const { data: topWinnersAndLosers, isLoading: isWinnersAndLosersLoading } =
    useQuery({
      queryKey: ['getTopClaimers'],
      queryFn: () => clientApi.getTopWinnersAndLosers(),
    })

  return (
    <Grid
      mb='20px'
      gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
      gap={{ base: '20px', xl: '20px' }}
      display={{ base: 'block', xl: 'grid' }}
    >
      <Flex flexDirection='column' gap='30px'>
        <MiniStatisticsGrid />

        <ProjectsDynamicChart />

        <DropsList />

        {/*<Banner />*/}
      </Flex>

      <Flex flexDirection='column' mt={{ base: '30px', xl: '0' }}>
        <Card px='0px' mb='20px'>
          <TopClaimersTable
            title='Top Claimers'
            tableData={topWinnersAndLosers?.winners}
          />
        </Card>

        <Card px='0px' mb='20px'>
          <TopClaimersTable
            title='Top Losers'
            tableData={topWinnersAndLosers?.losers || []}
          />
        </Card>
      </Flex>
    </Grid>
  )
}
