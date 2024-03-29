'use client'
import React from 'react'
import { Box, Center, Flex, Grid, Spinner } from '@chakra-ui/react'
import Banner from '../../../components/drop/Banner'
import banner from '../../../img/auth/banner.png'
import General from '../../../components/drop/General'
import Card from '../../../components/card/Card'
import DropConversionChartCard from '../../../components/drop/DropConversionChartCard'
import DropDynamicChart from '../../../components/drop/DropDynamicChart'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../../hooks/useClientApi'
import { AIRDROPS_IMAGES } from '../../../constants'
import TopDropClaimersTable from '../../../components/drop/TopDropClaimersTable'

const Page = ({ params }: { params: { dropId: string } }) => {
  const { dropId } = params
  const { clientApi } = useClientApi()

  const { data: airdropProject, isLoading: isAirdropProjectLoading } = useQuery(
    {
      queryKey: ['drop', dropId],
      queryFn: () => clientApi.getAirdropProject(dropId),
    },
  )

  if (isAirdropProjectLoading) {
    return (
      <Center my={50}>
        <Spinner />
      </Center>
    )
  }

  return (
    <Box mb={5}>
      <Banner
        banner={banner.src}
        avatar={AIRDROPS_IMAGES[airdropProject?.name.toLowerCase()]}
        name={airdropProject?.name}
        job={new Date(airdropProject?.snapshot_date).toLocaleDateString()}
      />

      <Grid
        gap='20px'
        gridTemplateColumns={{ lg: '1fr 0.8fr', xl: '1fr 1fr' }}
        display={{ base: 'block', lg: 'grid' }}
      >
        <Flex flexDir='column' gap={5}>
          <General description={airdropProject?.description} />
          <Card px='0px'>
            <TopDropClaimersTable dropId={dropId} />
          </Card>
        </Flex>

        <Flex flexDir='column' gap={5} align='start' w='100%'>
          <DropConversionChartCard
            totalAllocated={airdropProject?.total_allocated_usd}
            totalClaimed={airdropProject?.total_claimed_usd}
          />
          <DropDynamicChart dropId={dropId} />
        </Flex>
      </Grid>
    </Box>
  )
}

export default Page
