// Chakra imports
import { Box, Flex, Avatar, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '../card/Card'
import { VSeparator } from '../separator/Separator'

export default function Banner(props: {
  banner: string
  avatar: string | any
  name: string
  job: string
  [x: string]: any
}) {
  const { banner, avatar, name, job, posts, followers, following, ...rest } =
    props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const borderColor = useColorModeValue(
    'white !important',
    '#111C44 !important',
  )
  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems='center' {...rest} pt={0}>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='191px'
        w='102%'
      />
      <Avatar
        mx='auto'
        src={avatar.src}
        h='157px'
        w='157px'
        mt='-63px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='32' mt='10px'>
          cosmos140e7u946a2nqqkvcnjpjm83d0ynsqem8g840tx
      </Text>

      <Flex w='max-content' mx='auto' mt='46px'>
        <Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            28
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Claimed Drops
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' me='60px' alignItems='center' flexDirection='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            46
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Missed Drops
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            0.56
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Cosmos Stake
          </Text>
        </Flex>

        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

        <Flex mx='auto' alignItems='center' flexDirection='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            Dec 2024
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Staked From
          </Text>
        </Flex>
      </Flex>
    </Card>
  )
}
