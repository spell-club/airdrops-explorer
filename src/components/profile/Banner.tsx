// Chakra imports
import { Box, Flex, Avatar, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '../card/Card'
import { VSeparator } from '../separator/Separator'
import { generateIcon } from '../../utils'
import IconWithBg from 'components/IconWithBg'

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
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important',
  )
  const icon = generateIcon(name, 30)
  return (
    <Card mb='20px' alignItems='center' {...rest} pt={0}>
      <Box
        bgColor='#151523'
        opacity='1'
        bgImage='radial-gradient(#a378e1 1.1px, #151523 1.1px)'
        bgSize='22px 22px'
        borderRadius='16px'
        h='191px'
        w='102%'
      />
      <IconWithBg
        mx='auto'
        icon={icon}
        h='157px'
        w='157px'
        mt='-63px'
        border='2px solid'
        borderColor={borderColor}
      />

      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='32'
        mt='10px'
        display={{ base: 'none', lg: 'inline' }}
      >
        {name}
      </Text>

      <Text
        color={textColorPrimary}
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
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {claimedDrops}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Claimed Drops
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {missedDrops}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Missed Drops
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}
