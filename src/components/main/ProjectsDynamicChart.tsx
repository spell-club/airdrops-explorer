import React, { useMemo, useState } from 'react'
import useClientApi from '../../hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import { roundToPrecision } from '../../utils'
import { Box, Flex, useColorModeValue, Text } from '@chakra-ui/react'
import Card from '../card/Card'
import LineChart from '../UI/charts/LineChart'
import useDefaultChartConfig from '../../hooks/useDefaultChartConfig'
import SelectTimelineMenu from 'components/UI/menu/SelectTimelineMenu'
import useAirdropsDates from '../../hooks/useAirdropsDates'

const ProjectsDynamicChart = () => {
  const { clientApi } = useClientApi()
  const { chartConfig, ovewriteCategories, timeCategories } =
    useDefaultChartConfig()
  const { data: chartData, isLoading: isChartDataLoading } = useQuery({
    queryKey: ['dropsHistory'],
    queryFn: () => clientApi.getProjectsHistoricalValue(),
  })
  const [selectedTime, setSelectedTime] = useState(timeCategories[0])
  const { airdropsLabelsForChart } = useAirdropsDates()

  const dataByTime = useMemo(() => {
    if (!chartData) return []

    return chartData.slice(-selectedTime.value)
  }, [chartData, selectedTime])

  const { claimedArray, allocatedArray } = useMemo(() => {
    const claimedArray: number[] = []
    const allocatedArray: number[] = []

    dataByTime.forEach((data) => {
      claimedArray.push(
        roundToPrecision({ value: data.claimed_amount_usd, precision: 2 }),
      )
      allocatedArray.push(
        roundToPrecision({ value: data.allocated_amount_usd, precision: 2 }),
      )
    })

    return { claimedArray, allocatedArray }
  }, [dataByTime])

  const datesArray = dataByTime?.map((data) =>
    new Date(data.date).toLocaleDateString(),
  )
  const textColor = useColorModeValue('secondaryGray.900', 'white')

  return (
    <Card
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      w='100%'
      mb='0px'
    >
      <Flex w='100%' justify='space-between' align='center'>
        <Text
          color={textColor}
          fontSize='xl'
          fontWeight='600'
          alignSelf='start'
          pb={2}
        >
          Allocated vs Claimed
        </Text>
        <SelectTimelineMenu
          selected={selectedTime}
          items={timeCategories}
          onItemSelected={setSelectedTime}
        />
      </Flex>

      <Flex w='100%' flexDirection={{ base: 'column', lg: 'row' }}>
        <Box minH='360px' minW='100%' mt='auto'>
          <LineChart
            chartData={[
              { name: 'Allocated', data: allocatedArray },
              { name: 'Claimed', data: claimedArray },
            ]}
            chartOptions={{
              ...chartConfig,
              colors: ['#4690fd', '#f035fd'],
              xaxis: {
                ...chartConfig.xaxis,
                categories: datesArray,

                // overwriteCategories: ovewriteCategories(
                //   datesArray,
                //   selectedTime.label === '1W' ? 4 : 10,
                // ),
              },
              annotations: {
                xaxis: airdropsLabelsForChart,
              },
            }}
          />
          <Flex justify='space-between' pl={5} pr={2}>
            {ovewriteCategories(
              datesArray,
              selectedTime.label === '1W' ? 4 : 10,
            ).map((date) => (
              <Text key={date} fontSize={12} color='secondaryGray.600'>
                {date}
              </Text>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Card>
  )
}

export default ProjectsDynamicChart
