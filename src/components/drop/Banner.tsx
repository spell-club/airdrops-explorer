// Chakra imports
import { Box, Flex, Avatar, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '../card/Card'
import { VSeparator } from '../separator/Separator'

export default function Banner(props: {
  banner: string
  avatar: string | any
  name: string
  airdropDate: string
  snapshotDate: string
  users: string
  [x: string]: any
}) {
  const { banner, avatar, name, airdropDate, snapshotDate, users, ...rest } =
    props

  return (
    <Card mb='20px' alignItems='center' {...rest} pt={0} px={0}>
      <Box
        opacity='1'
        bgImage='radial-gradient(#a378e1 1.1px, #000614 1.1px)'
        bgSize='22px 22px'
        borderRadius='20px'
        h='191px'
        w='100%'
        borderBottomRadius={0}
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='157px'
        w='157px'
        mt='-63px'
        border='4px solid'
        borderColor='navy.700!important'
      />
      <Text fontWeight='bold' fontSize='32' mt='10px'>
        {name}
      </Text>
      <Flex
        w='max-content'
        mx='auto'
        mt={{ base: '20px', lg: '40px' }}
        flexDir={{ base: 'column', lg: 'row' }}
        justify='center'
        borderRadius={20}
      >
        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text fontSize='2xl' fontWeight='700'>
            {airdropDate}
          </Text>
          <Text color='gray.400' fontSize='sm' fontWeight='400'>
            Airdrop Date
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text fontSize='2xl' fontWeight='700'>
            {snapshotDate}
          </Text>
          <Text color='gray.400' fontSize='sm' fontWeight='400'>
            Snapshot Date
          </Text>
        </Flex>

        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text fontSize='2xl' fontWeight='700'>
            {users}
          </Text>
          <Text color='gray.400' fontSize='sm' fontWeight='400'>
            Users
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}
