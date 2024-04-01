import React, { useMemo, useState } from 'react'
import Card from '../card/Card'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import LineChart from '../charts/LineChart'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../hooks/useClientApi'
import { roundToPrecision } from '../../utils'
import SelectTimelineMenu from '../SelectTimelineMenu'
import useDefaultChartConfig from '../../hooks/useDefaultChartConfig'

interface Props {
  dropId: string
}

const DropDynamicChart = ({ dropId }: Props) => {
  const { chartConfig, ovewriteCategories, timeCategories } =
    useDefaultChartConfig()
  const { clientApi } = useClientApi()
  const { data: chartData, isLoading: isChartDataLoading } = useQuery({
    queryKey: ['dropHistory'],
    queryFn: () => clientApi.getProjectHistoricalValue(dropId),
  })
  const [selectedTime, setSelectedTime] = useState(timeCategories[0])

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
          Total airdropped and claimed value
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
              { name: 'Claimed', data: claimedArray },
              { name: 'Allocated', data: allocatedArray },
            ]}
            chartOptions={{
              ...chartConfig,
              colors: ['#4318FF', '#39B8FF'],
              xaxis: {
                ...chartConfig.xaxis,
                categories: datesArray,
                overwriteCategories: ovewriteCategories(
                  datesArray,
                  selectedTime.label === '1W' ? 4 : 7,
                ),
              },
            }}
          />
        </Box>
      </Flex>
    </Card>
  )
}

export default DropDynamicChart
