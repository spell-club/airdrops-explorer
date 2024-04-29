'use client'
import { useMemo } from 'react'
import { Box, Center, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import Banner from 'components/profile/Banner'
import banner from 'assets/img/profile/banner.png'
import NFT6 from 'assets/img/nfts/Nft6.png'
import ClaimedUnclaimedChart from 'components/profile/ClaimedUnclaimedChart'
import ProfitEstimationChart from 'components/profile/ProfitEstimationChart'
import useClientApi from 'hooks/useClientApi'
import { useQuery } from '@tanstack/react-query'
import AirdropsTable from 'components/profile/AssetsTable'
import { AddressInfo } from 'api/types'
import Card from 'components/card/Card'
import Link from 'next/link'
import Loader from 'components/UI/loader'
import useAirdrops from 'hooks/useAirdrops'

const emptyState: AddressInfo = {
	claimed_airdrops: 0,
	total_claimed_usd: 0,
	total_unclaimed_usd: 0,
	unclaimed_airdrops: 0,
}

const Page = ({ params }: { params: { address: string } }) => {
	const { address } = params
	const { clientApi } = useClientApi()
	// initial projects loading
	const { airdrops } = useAirdrops()

	const {
		data: addressInfo,
		isLoading: isAddressInfoLoading,
		error,
	} = useQuery({
		queryKey: ['profile', address],
		queryFn: () => clientApi.getAddressInfo(address),
		retry: 1,
	})

	const isNotValid = useMemo(
		// @ts-ignore
		() => error?.response?.data?.message === 'address',
		[error],
	)

	const isNotFound = useMemo(
		// @ts-ignore
		() => error?.response?.data?.message === 'NOT_FOUND',
		[error],
	)

	if (isAddressInfoLoading) {
		return <Loader my={50} />
	}

	const info = isNotFound ? emptyState : addressInfo

	if (isNotValid) {
		return (
			<Box>
				<Center my={50}>
					<Card w="100%" alignItems="center">
						<Flex flexDir="column" gap={5} align="center">
							{' '}
							<Box textAlign="center">
								<Text fontSize={32} fontWeight={600}>
									Invalid address
								</Text>
							</Box>
							<Link href="/" style={{ textDecoration: 'underline' }}>
								Back to home
							</Link>
						</Flex>
					</Card>
				</Center>
			</Box>
		)
	}

	return (
		<Box>
			<Banner
				banner={banner.src}
				avatar={NFT6}
				name={address}
				claimedDrops={info?.claimed_airdrops}
				missedDrops={info?.unclaimed_airdrops}
			/>
			<SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap="20px" mb="20px">
				<ClaimedUnclaimedChart address={address} />
				<ProfitEstimationChart
					totalAllocatedUsd={info?.total_claimed_usd + info?.total_unclaimed_usd}
					totalClaimedUsd={info?.total_claimed_usd}
				/>
			</SimpleGrid>

			<AirdropsTable address={address} />
		</Box>
	)
}

export default Page
