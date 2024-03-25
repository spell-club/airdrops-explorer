import React from 'react'
import Card from '../card/Card'
import { Flex, Text } from '@chakra-ui/react'
import CircularChart from '../charts/DonutChart'
import { VSeparator } from '../separator/Separator'

const CONVERSION_VALUE = 27

const ProfitEstimationChart = () => {
  return (
    <Card
      p='20px'
      alignItems='center'
      flexDirection='column'
      w='100%'
      bg='whiteAlpha.800'
    >
      <Flex flexDir='column' align='center' gap={4}>
        <Text fontSize={20} fontWeight={600}>
          Dropped/Claimed
        </Text>

        <Text textAlign='center' fontSize={14} color='gray.400'>
          Discover your stats, and learn more <br /> about your business users{' '}
        </Text>

        <CircularChart value={CONVERSION_VALUE}>
          <Flex flexDir='column' align='center'>
            <Text color='gray.400' fontSize={14}>
              Conversion
            </Text>
            <Text fontSize={20} fontWeight={600}>
              {CONVERSION_VALUE}%
            </Text>
          </Flex>
        </CircularChart>

        <Flex
          justify='space-between'
          w={340}
          px={10}
          py={4}
          boxShadow='rgba(112, 144, 176, 0.08) 14px 17px 40px 4px'
          borderRadius={20}
        >
          <Flex flexDir='column'>
            <Text fontSize={14} color='gray.400'>
              Est. Users
            </Text>
            <Text fontSize={20} fontWeight={600}>
              8540
            </Text>
          </Flex>
          <VSeparator />
          <Flex flexDir='column'>
            <Text fontSize={14} color='gray.400'>
              Est. Purchases
            </Text>
            <Text fontSize={20} fontWeight={600}>
              $3.984
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ProfitEstimationChart
