'use client'
import {
  Box,
  Flex,
  FormLabel,
  Grid,
  Icon,
  Image,
  Select,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react'
import Banner from '../components/main/Banner'
import Card from '../components/card/Card'
import { tableColumnsTopClaimers } from '../views/admin/marketplace/variables/tableDataTopCreators'
import React from 'react'
import TopClaimersTable from '../components/main/TopClaimersTable'
import DropsList from '../components/main/DropsList'
import MiniStatistics from '../components/card/MiniStatistics'
import IconBox from '../components/icons/IconBox'
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from 'react-icons/md'
import Usa from '../img/dashboards/usa.png'
import TotalSpent from '../views/admin/default/components/TotalSpent'

export default function Home({}) {
  const brandColor = useColorModeValue('brand.500', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  return (
    <Grid
      mb='20px'
      gridTemplateColumns={{ xl: '1fr 0.36fr', '2xl': '1fr 0.46fr' }}
      gap={{ base: '20px', xl: '20px' }}
      display={{ base: 'block', xl: 'grid' }}
    >
      <Flex flexDirection='column'>
        <Banner />

        <DropsList />

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, '2xl': 3 }}
          gap='20px'
          mb='20px'
          mt='40px'
        >
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
            name='Earnings'
            value='$350.4'
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
            name='Spend this month'
            value='$642.39'
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
            name='Total Projects'
            value='2935'
          />
        </SimpleGrid>

        <TotalSpent />
      </Flex>

      <Flex flexDirection='column' mt={{ base: '20px', xl: '0' }}>
        <Card px='0px' mb='20px'>
          <TopClaimersTable
            title='Top Claimers'
            tableData={tableColumnsTopClaimers}
          />
        </Card>

        <Card px='0px' mb='20px'>
          <TopClaimersTable
            title='Top Losers'
            tableData={tableColumnsTopClaimers}
          />
        </Card>
      </Flex>
    </Grid>
  )
}
