// Chakra imports
import { Button, Flex, Text, Box, Image } from '@chakra-ui/react'
import banner from '../../img/main/banner.png'
import { SearchBar } from '../navbar/searchBar/SearchBar'
import React from 'react'

// Assets

export default function Banner() {
  // Chakra Color Mode
  return (
    <Flex bg='purple.100' bgSize='cover' borderRadius='30px' pos='relative'>
      <Flex
        flexDir='column'
        py={{ base: '30px', md: '56px' }}
        px={{ base: '30px', md: '64px' }}
        pos="relative"
        zIndex={2}
      >
        <Text
          fontSize={{ base: '24px', md: '34px' }}
          color='white'
          mb='14px'
          fontWeight='700'
          lineHeight={{ base: '32px', md: '42px' }}
        >
          Check my airdrop eligibility
        </Text>
        <Text
          fontSize='md'
          color='#E3DAFF'
          fontWeight='500'
          mb='40px'
          lineHeight='28px'
        >
          Drop your cosmos address into form below to check your <br />{'    '}
          eligibility for airdrops are available for you.
        </Text>
        <Flex
          align='center'
          bg='white'
          borderRadius={30}
          w='fit-content'
          py={2}
          px={4}
        >
          <SearchBar me='10px' borderRadius='30px' />
          <Button
            bg='purple.100'
            color='white'
            borderRadius={30}
            _hover={{ opacity: '0.8' }}
            fontWeight='500'
            fontSize='14px'
          >
            Check
          </Button>
        </Flex>
      </Flex>

      <Image
        display={{ base: 'none', lg: 'block', }}
        src={banner.src}
        width={415}
        height='100%'
        alt='banner'
        pos='absolute'
        right={0}
      />
    </Flex>
  )
}
