import React from 'react'
import Card from '../card/Card'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import CircularChart from '../charts/DonutChart'
import { VSeparator } from '../separator/Separator'
import { formatValue, roundToPrecision } from '../../utils'
import numbro from 'numbro'

interface Props {
  totalAllocatedUsd: number
  totalClaimedUsd: number
}

const ProfitEstimationChart = ({
  totalAllocatedUsd,
  totalClaimedUsd,
}: Props) => {
  const conversion = roundToPrecision({
    value: (totalClaimedUsd / totalAllocatedUsd) * 100,
    precision: 2,
    method: 'round',
  })

  return (
    <Card p='20px' alignItems='center' flexDirection='column' w='100%' bg='navy.800'>
      <Flex flexDir='column' align='center' gap={4}>
        <Text fontSize={20} fontWeight={600}>
          Dropped/Claimed
        </Text>

        <Text textAlign='center' fontSize={14} color='gray.400'>
          Discover your stats, and learn more <br /> about your business users{' '}
        </Text>

        <CircularChart value={conversion}>
          <Flex flexDir='column' align='center'>
            <Text color='gray.400' fontSize={14}>
              Conversion
            </Text>
            <Text fontSize={20} fontWeight={600}>
              {conversion}%
            </Text>
          </Flex>
        </CircularChart>

        <Flex
          gap={5}
          px={10}
          py={4}
          boxShadow='rgba(112, 144, 176, 0.08) 4px 1px 10px 4px'
          borderRadius={20}
        >
          <Flex flexDir='column'>
            <Text fontSize={14} color='gray.400'>
              Total Allocated
            </Text>
            <Text fontSize={20} fontWeight={600}>
              ${formatValue(totalAllocatedUsd, 0)}
            </Text>
          </Flex>
          <VSeparator />
          <Flex flexDir='column'>
            <Text fontSize={14} color='gray.400'>
              Total Claimed
            </Text>
            <Text fontSize={20} fontWeight={600}>
              ${formatValue(totalClaimedUsd, 0)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ProfitEstimationChart
