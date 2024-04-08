import React from 'react'
import Card from '../card/Card'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import NFT1 from '../../assets/img/nfts/Nft1.png'

const AIRDROPS = [
  {
    name: 'Celestia',
    status: 'Claimed',
    amount: 'TIA 10 000',
    id: 1,
  },
  {
    name: 'Airdrop 2',
    status: 'Claimed',
    amount: 'MLK 1000',
    id: 2,
  },
  {
    name: 'Celestia',
    status: 'Missed',
    amount: 'TIA 10 000',
    id: 3,
  },
  {
    name: 'Celestia',
    status: 'Claimed',
    amount: 'TIA 10 000',
    id: 4,
  },
  {
    name: 'Celestia',
    status: 'Missed',
    amount: 'TIA 10 000',
    id: 5,
  },
  {
    name: 'Celestia',
    status: 'Missed',
    amount: 'TIA 10 000',
    id: 6,
  },
]

const YourAirdropsTable = () => {
  return (
    <Card p='30px' alignItems='center' flexDirection='column' w='auto'>
      <Text fontSize={20} fontWeight={600} alignSelf='start' mb='26px'>
        Your Airdrops
      </Text>

      <Flex flexDir='column' gap={5}>
        {AIRDROPS.map((airdrop, index) => {
          const isMissed = airdrop.status === 'Missed'
          return (
            <Flex
              w={320}
              justify='space-between'
              align='center'
              key={airdrop.id}
            >
              <Flex align='center' gap={5}>
                <Avatar src={NFT1.src} w='36px' h='36px' />

                <Flex flexDir='column'>
                  <Text fontSize={16}>{airdrop.name}</Text>
                  <Text fontSize={14} color='gray.400'>
                    {airdrop.status}
                  </Text>
                </Flex>
              </Flex>

              <Box
                minW={90}
                px={2}
                py={1}
                color={isMissed ? 'red.500' : 'green.500'}
                bg={isMissed ? '#FEEFEE' : '#E6FAF5'}
                borderRadius={10}
              >
                {airdrop.amount}
              </Box>
            </Flex>
          )
        })}
      </Flex>
    </Card>
  )
}

export default YourAirdropsTable
