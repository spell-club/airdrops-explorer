'use client'

import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Banner from '../components/main/Banner'
import NFT from '../components/card/NFT'
import Avatar1 from '../img/avatars/avatar1.png'
import Avatar2 from '../img/avatars/avatar2.png'
import Avatar3 from '../img/avatars/avatar3.png'
import Avatar4 from '../img/avatars/avatar4.png'
import Nft1 from '../img/nfts/Nft1.png'
import Nft2 from '../img/nfts/Nft2.png'
import Nft3 from '../img/nfts/Nft3.png'
import Card from '../components/card/Card'
import TableTopCreators from '../views/admin/marketplace/components/TableTopCreators'
import tableDataTopCreators, {
  tableColumnsTopClaimers,
} from '../views/admin/marketplace/variables/tableDataTopCreators'
import React from 'react'
import TopClaimersTable from '../components/main/TopClaimersTable'

export default function Home({}) {
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorBrand = useColorModeValue('brand.500', 'white')
  return (
    <Box>
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex
          flexDirection='column'
          gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
        >
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: 'column', md: 'row' }}
              align={{ base: 'start', md: 'center' }}
            >
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Recent Airdrops
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='Celestia'
                author='Avg amount 1000 TIA'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft1}
                currentbid='100 000 000 TIA'
                download='#'
              />
              <NFT
                name='Celestia'
                author='Avg amount 1000 TIA'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft2}
                currentbid='100 000 000 TIA'
                download='#'
              />
              <NFT
                name='Celestia'
                author='Avg amount 1000 TIA'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft3}
                currentbid='100 000 000 TIA'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
        >
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
      {/* Delete Product */}
    </Box>
  )
}
