import React from 'react'
import { Flex, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import NFT from '../card/NFT'
import Avatar1 from '../../img/avatars/avatar1.png'
import Avatar2 from '../../img/avatars/avatar2.png'
import Avatar3 from '../../img/avatars/avatar3.png'
import Avatar4 from '../../img/avatars/avatar4.png'
import Nft1 from '../../img/nfts/Nft1.png'
import Nft2 from '../../img/nfts/Nft2.png'
import Nft3 from '../../img/nfts/Nft3.png'

const DropsList = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white')

  return (
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
  )
}

export default DropsList
