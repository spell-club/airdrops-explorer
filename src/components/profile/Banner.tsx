// Chakra imports
import { Box, Flex, Avatar, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '../card/Card'
import { VSeparator } from '../separator/Separator'
import { generateIcon, getProminentColor } from '../../utils'
import IconWithBg from 'components/IconWithBg'
import { useState } from 'react'

export default function Banner(props: {
  banner: string
  avatar: string | any
  name: string
  claimedDrops: number
  missedDrops: number
  [x: string]: any
}) {
  const {
    banner,
    avatar,
    name,
    job,
    posts,
    followers,
    claimedDrops,
    missedDrops,
    following,
    ...rest
  } = props

  const [profileColor, setProfileColor] = useState('brand.500')
  const icon = generateIcon(name, 30)
  getProminentColor(icon).then((c) => {
    setProfileColor(String(c))
  })

  return (
    <Card mb='20px' alignItems='center' {...rest} pt={0} px={0}>
      <Box
        opacity='0.8'
        bg={`radial-gradient(circle, transparent 20%, #000614 20%, #000614 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #000614 20%, #000614 80%, transparent 80%, transparent) 17.5px 17.5px, linear-gradient(${profileColor} 1.4000000000000001px, transparent 1.4000000000000001px) 0 -0.7000000000000001px, linear-gradient(90deg, ${profileColor} 1.4000000000000001px, #000614 1.4000000000000001px) -0.7000000000000001px 0;`}
        bgSize='35px 35px, 35px 35px, 17.5px 17.5px, 17.5px 17.5px'
        borderRadius='20px'
        h='191px'
        w='100%'
        borderBottomRadius={0}
      />
      <IconWithBg
        mx='auto'
        icon={icon}
        h='157px'
        w='157px'
        mt='-63px'
        border='4px solid'
        borderColor='navy.700'
      />

      <Text
        fontWeight='bold'
        fontSize='32'
        mt='10px'
        display={{ base: 'none', lg: 'inline' }}
      >
        {name}
      </Text>

      <Text
        fontWeight='bold'
        fontSize='28'
        mt='10px'
        display={{ base: 'inline', lg: 'none' }}
      >
        cosmos140...em8g840tx
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
            {claimedDrops}
          </Text>
          <Text color='gray.400' fontSize='sm' fontWeight='400'>
            Claimed Drops
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text fontSize='2xl' fontWeight='700'>
            {missedDrops}
          </Text>
          <Text color='gray.400' fontSize='sm' fontWeight='400'>
            Missed Drops
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}
