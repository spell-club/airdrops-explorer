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

  return (
    <Card mb='20px' alignItems='center' {...rest} pt={0}>
      <Box
        // bg={`url(${banner})`}
        bgColor='#151523'
        opacity='1'
        bgImage='radial-gradient(#a378e1 1.1px, #151523 1.1px)'
        bgSize='22px 22px'
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
        borderColor='navy.700!important'
      />
      <Text fontWeight='bold' fontSize='32' mt='10px'>
        {name}
      </Text>
      <Text fontSize='sm' >
        {job}
      </Text>
    </Card>
  )
}
