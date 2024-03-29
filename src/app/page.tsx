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

export default function Home({}) {
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  const { clientApi } = useClientApi()
  const { data: topWinnersAndLosers, isLoading: isWinnersAndLosersLoading } =
    useQuery({
      queryKey: ['getTopClaimers'],
      queryFn: () => clientApi.getTopWinnersAndLosers(),
    })
  const { colorMode, toggleColorMode } = useColorMode()

  // useEffect(() => {
  //   toggleColorMode()
  // }, [])

  return (
    <Grid
      mb='20px'
      gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
      gap={{ base: '20px', xl: '20px' }}
      display={{ base: 'block', xl: 'grid' }}
    >
      <Flex flexDirection='column' gap='30px'>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }} gap='20px'>
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdBarChart} color={brandColor} />
                }
              />
            }
            name='Total Droped'
            value='$0'
          />
          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon
                    w='32px'
                    h='32px'
                    as={MdAttachMoney}
                    color={brandColor}
                  />
                }
              />
            }
            name='Total Claimed'
            value='$0'
          />

          <MiniStatistics
            startContent={
              <IconBox
                w='56px'
                h='56px'
                bg={boxBg}
                icon={
                  <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
                }
              />
            }
            name='Users'
            value='999'
          />
        </SimpleGrid>
        <ProjectsDynamicChart />

        <DropsList />

        <Banner />
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
