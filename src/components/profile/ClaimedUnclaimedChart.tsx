import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Card from '../card/Card'
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md'
import { RiArrowUpSFill } from 'react-icons/ri'
import { IoCheckmarkCircle } from 'react-icons/io5'
import LineChart from '../charts/LineChart'
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from '../../variables/charts'

const ClaimedUnclaimedChart = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white')
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  const iconColor = useColorModeValue('brand.500', 'white')
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' },
  )
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.100' },
  )

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMounted(true)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <Card
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      w='100%'
      mb='0px'
    >
      <Flex w='100%' flexDirection={{ base: 'column', lg: 'column' }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'
          >
            $37.5K
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'
            >
              Overall Revenue
            </Text>
            <Flex align='center'>
              <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
              <Text
                color='green.500'
                fontSize='sm'
                fontWeight='700'
                lineHeight='100%'
              >
                +2.45%
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <LineChart
            chartData={lineChartDataTotalSpent}
            chartOptions={lineChartOptionsTotalSpent}
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default ClaimedUnclaimedChart
