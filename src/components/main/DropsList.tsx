import React from 'react'
import { Flex, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import AirdropProject from '../AirdropProject'
import { useQuery } from '@tanstack/react-query'
import useClientApi from '../../hooks/useClientApi'
import { AIRDROPS_IMAGES } from '../../constants'

const DropsList = () => {
  const { clientApi } = useClientApi()

  const { data: airdrops, isLoading: isAirdropsLoading } = useQuery({
    queryKey: ['airdrops'],
    queryFn: () => clientApi.getAirdropProjects(),
  })


  return (
    <Flex direction='column'>
      <Text
        fontSize='xl'
        ms='24px'
        fontWeight='700'
        mb='20px'
      >
        Recent Airdrops
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
        {airdrops?.map((airdrop) => (
          <AirdropProject
            key={airdrop.id}
            name={airdrop.name}
            airdropAmount={airdrop.airdrop_amount}
            tokenSymbol={airdrop.token_symbol}
            avgAmount={airdrop.average_airdrop_amount}
            image={AIRDROPS_IMAGES[airdrop.name.toLowerCase()]}
            {...airdrop}
          />
        ))}
      </SimpleGrid>
    </Flex>
  )
}

export default DropsList
