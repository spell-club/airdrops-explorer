import React from 'react'
import Card from '../card/Card'
import {Flex, Text, useColorModeValue} from '@chakra-ui/react'
import CircularChart from '../charts/DonutChart'
import { VSeparator } from '../separator/Separator'
import numbro from 'numbro'
import { roundToPrecision } from '../../utils'

const CONVERSION_VALUE = 66

interface Props {
  totalAllocated: number
  totalClaimed: number
}

const DropConversionChartCard = ({ totalAllocated, totalClaimed }: Props) => {
  const bg = useColorModeValue('whiteAlpha.800', 'navy.800')
  const conversion = roundToPrecision({
    value: (totalClaimed / totalAllocated) * 100,
    precision: 2,
    method: 'floor',
  })

  const formattValue = (value: number) => {
    const truncatedAmount = roundToPrecision({
      value,
      precision: 0,
      method: 'floor',
    })

    const roundFormat = {
      trimMantissa: true,
      thousandSeparated: true,
    }

    return String(numbro(truncatedAmount).format(roundFormat))
  }

  return (
    <Card
      p='20px'
      alignItems='center'
      flexDirection='column'
      w='100%'
      bg={bg}
    >
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
          boxShadow='rgba(112, 144, 176, 0.08) 14px 17px 40px 4px'
          borderRadius={20}
        >
          <Flex flexDir='column' align='center'>
            <Text fontSize={14} color='gray.400'>
              Total Allocated
            </Text>
            <Text fontSize={20} fontWeight={600}>
              ${formattValue(totalAllocated)}
            </Text>
          </Flex>
          <VSeparator />
          <Flex flexDir='column' align='center'>
            <Text fontSize={14} color='gray.400'>
              Total Claimed
            </Text>
            <Text fontSize={20} fontWeight={600}>
              ${formattValue(totalClaimed)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  )
}

export default DropConversionChartCard
