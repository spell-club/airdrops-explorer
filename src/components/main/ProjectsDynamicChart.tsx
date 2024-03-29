import React from 'react'
import useClientApi from '../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import { roundToPrecision } from '../../utils'
import {
  Box,
  Button,
  Flex,
  Icon,
  useColorModeValue,
  Text,
} from '@chakra-ui/react'
import Card from '../card/Card'
import { MdBarChart, MdOutlineCalendarToday } from 'react-icons/md'
import LineChart from '../charts/LineChart'
import { ApexOptions } from 'apexcharts'

const lineChartOptionsTotalSpent: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: '#4318FF',
    },
  },
  colors: ['#39B8FF'],
  markers: {
    size: 0,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    // type: "line",
  },
  xaxis: {
    // type: "numeric",
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      // color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  // color: ["#7551FF", "#39B8FF"],
}

const ProjectsDynamicChart = () => {
  const { clientApi } = useClientApi()
  const { data: chartData, isLoading: isChartDataLoading } = useQuery({
    queryKey: ['dropsHistory'],
    queryFn: () => clientApi.getProjectsHistoricalValue(),
  })

  const roundFormat = {
    trimMantissa: true,
    thousandSeparated: true,
  }

  const dataArray = chartData?.map((data) =>
    roundToPrecision({ value: data.value_usd, precision: 2 }),
  )

  const datesArray = chartData?.map((data) =>
    new Date(data.date).toLocaleDateString(),
  )

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

  return (
    <Card
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      w='100%'
      mb='0px'
    >
      <Text
        color={textColor}
        fontSize='xl'
        fontWeight='600'
        alignSelf='start'
        pb={2}
      >
        Total airdropped and claimed value
      </Text>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px' w='100%'>
        <Flex align='center' w='100%'>
          <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'
          >
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me='4px'
            />
            This month
          </Button>
          <Button
            ms='auto'
            alignItems='center'
            justifyContent='center'
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
          >
            <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
          </Button>
        </Flex>
      </Flex>

      <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
        <Box minH='360px' minW='100%' mt='auto'>
          <LineChart
            chartData={[{ name: 'Value USD', data: dataArray }]}
            chartOptions={{
              ...lineChartOptionsTotalSpent,
              xaxis: {
                categories: datesArray,
                labels: {
                  style: {
                    colors: '#A3AED0',
                    fontSize: '12px',
                    fontWeight: '500',
                  },
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                },
              },
            }}
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default ProjectsDynamicChart
