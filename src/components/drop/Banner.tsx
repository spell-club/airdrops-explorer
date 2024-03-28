// Chakra imports
import { Box, Flex, Avatar, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '../card/Card'

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
    <Card mb='20px' alignItems='center' {...rest} pt={0}>
      <Box
        bg={`url(${banner})`}
        bgSize='cover'
        borderRadius='16px'
        h='191px'
        w='102%'
      />
      <Avatar
        mx='auto'
        src={avatar}
        h='157px'
        w='157px'
        mt='-63px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='32' mt='10px'>
        {name}
      </Text>
      <Text fontSize='sm' color='black'>
        {job}
      </Text>
    </Card>
  )
}
