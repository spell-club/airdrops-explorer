import React, { useMemo } from 'react'
import { Flex, Text } from '@chakra-ui/react'

import CircularChart from '../UI/charts/DonutChart'
import { VSeparator } from '../UI/separator'
import Card from '../card/Card'
import { formatValue, roundToPrecision } from '../../utils'

interface Props {
  totalAllocatedUsd: number
  totalClaimedUsd: number
}

const ProfitEstimationChart = ({
  totalAllocatedUsd,
  totalClaimedUsd,
}: Props) => {
  const conversion = useMemo(() => {
    if (totalAllocatedUsd === 0) return 0

    return roundToPrecision({
      value: (totalClaimedUsd / totalAllocatedUsd) * 100,
      precision: 2,
      method: 'round',
    })
  }, [totalAllocatedUsd, totalClaimedUsd])

  return (
    <Card
      p='10px'
      alignItems='center'
      flexDirection='column'
      w='100%'
      bg='navy.800'
    >
      <Flex flexDir='column' align='center' gap={8}>
        <Text fontSize={20} fontWeight={600}>
          Allocated/Claimed
        </Text>

        <CircularChart value={conversion}>
          <Flex flexDir='column' align='center'>
            <Text color='gray.400' fontSize={14}>
              Claim Rate
            </Text>
            <Text fontSize={20} fontWeight={600}>
              {conversion}%
            </Text>
          </Flex>
        </CircularChart>

        <Flex
          gap={{ base: 2, md: 5 }}
          px={{ base: 4, md: 6 }}
          py={4}
          boxShadow='rgba(112, 144, 176, 0.08) 4px 1px 10px 4px'
          borderRadius={20}
          justifyContent='space-between'
        >
          <Flex flexDir='column'>
            <Text fontSize={{ base: 10, md: 14 }} color='gray.400'>
              Total Allocated $
            </Text>

            <Text
              textAlign='center'
              fontSize={{ base: 14, md: 20 }}
              fontWeight={600}
            >
              ${formatValue(totalAllocatedUsd, 0)}
            </Text>
          </Flex>

          <VSeparator />

          <Flex flexDir='column'>
            <Text fontSize={{ base: 10, md: 14 }} color='gray.400'>
              Total Claimed $
            </Text>
            <Text
              textAlign='center'
              fontSize={{ base: 14, md: 20 }}
              fontWeight={600}
            >
              ${formatValue(totalClaimedUsd, 0)}
            </Text>
          </Flex>

          <VSeparator />

          <Flex flexDir='column'>
            <Text fontSize={{ base: 10, md: 14 }} color='gray.400'>
              Total Missed $
            </Text>

            <Text
              textAlign='center'
              fontSize={{ base: 14, md: 20 }}
              fontWeight={600}
            >
              ${formatValue(totalAllocatedUsd - totalClaimedUsd, 0)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default ProfitEstimationChart
