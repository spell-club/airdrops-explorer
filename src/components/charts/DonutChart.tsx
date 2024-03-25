'use client'

import { PropsWithChildren } from 'react'
import { Box, CircularProgress, Flex } from '@chakra-ui/react'

interface Props extends PropsWithChildren {
  value: number
}

const CircularChart = ({ children, value }: Props) => {
  return (
    <Box pos='relative'>
      <CircularProgress value={value} capIsRound size={200} color="purple.100" thickness={7} transform="rotate(90deg)" />
      <Flex
        pos='absolute'
        w='100%'
        h='100%'
        justify='center'
        align='center'
        top='0'
      >
        {children}
      </Flex>
    </Box>
  )
}

// @ts-ignore
export default CircularChart
