import React from 'react'
import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react'
import Card from '../card/Card'
import { RiArrowUpSFill } from 'react-icons/ri'
import LineChart from '../charts/LineChart'

import useClientApi from '../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import { roundToPrecision } from '../../utils'
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
  colors: ['#4318FF', '#39B8FF'],
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
    categories: ['01.03', '02.03', '03.03', '04.03', '05.03', '06.03'],
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

interface Props {
  address: string
}
const ClaimedUnclaimedChart = ({ address }: Props) => {
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const { clientApi } = useClientApi()
  const { data: chartData, isLoading: isChartDataLoading } = useQuery({
    queryKey: ['claimHistory'],
    queryFn: () => clientApi.getClaimHistoricalValue(address),
  })

  const claimedArray = chartData?.map((data) =>
    roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }),
  )
  const unclaimedArray = chartData?.map((data) =>
    roundToPrecision({ value: data.unclaimed_amount_usd, precision: 2 }),
  )
  const datesArray = chartData?.map((data) =>
    new Date(data.date).toLocaleDateString(),
  )

  return (
    <Card
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      w='100%'
      mb='0px'
    >
      <Flex w='100%' flexDirection={{ base: 'column', lg: 'column' }}>
        <Box minH='360px' minW='75%' mt='auto'>
          <LineChart
            chartData={[
              { name: 'Claimed', data: claimedArray },
              { name: 'Unclaimed', data: unclaimedArray },
            ]}
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

export default ClaimedUnclaimedChart
