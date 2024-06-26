import React, { useMemo } from 'react'
import { AspectRatio, Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import numbro from 'numbro'
import Link from 'next/link'

import Card from './card/Card'

interface Props {
	id: number
	image: string
	name: string
	avgAmount: number
	airdropAmount: number
	tokenSymbol: string
}

const AirdropProject = ({ image, name, avgAmount, airdropAmount, tokenSymbol, id }: Props) => {
	const averageAmount = useMemo(() => {
		const roundFormat = {
			trimMantissa: true,
			thousandSeparated: true,
			average: true,
		}

		return String(numbro(avgAmount).format(roundFormat)).replace(/,/g, ' ')
	}, [avgAmount])

	const totalAmount = useMemo(() => {
		const roundFormat = {
			trimMantissa: true,
			thousandSeparated: true,
			average: true,
		}

		return String(numbro(airdropAmount).format(roundFormat)).replace(/,/g, ' ')
	}, [airdropAmount])

	return (
		<Link href={`/drop/${name.toLowerCase()}`}>
			<Card p="20px" cursor="pointer">
				<Flex direction={{ base: 'column' }} justify="center">
					<Box mb={{ base: '20px', '2xl': '20px' }} position="relative">
						<AspectRatio ratio={7 / 5}>
							<Image src={image} w={'100%'} borderRadius="20px" alt={name} />
						</AspectRatio>
					</Box>
					<Flex flexDirection="column" justify="space-between" h="100%">
						<Flex
							justify="space-between"
							direction={{
								base: 'row',
								md: 'column',
								lg: 'row',
								xl: 'column',
								'2xl': 'row',
							}}
							mb="auto"
						>
							<Flex direction="column">
								<Text
									fontSize={{
										base: 'xl',
										md: 'lg',
										lg: 'lg',
										xl: 'lg',
										'2xl': 'md',
										'3xl': 'lg',
									}}
									mb="5px"
									fontWeight="bold"
									me="14px"
								>
									{name}
								</Text>
								<Text
									color="secondaryGray.600"
									fontSize={{
										base: 'sm',
									}}
									fontWeight="400"
									me="14px"
								>
									Avg.amount {averageAmount} {tokenSymbol}
								</Text>
							</Flex>
						</Flex>
						<Flex
							align={{
								base: 'center',
								md: 'start',
								lg: 'center',
								xl: 'start',
								'2xl': 'center',
							}}
							justify="space-between"
							direction={{
								base: 'row',
								md: 'column',
								lg: 'row',
								xl: 'column',
								'2xl': 'row',
							}}
							mt="25px"
						>
							<Text fontWeight="700" fontSize="sm">
								{totalAmount} {tokenSymbol}
							</Text>

							<Button
								mt={{
									base: '0px',
									md: '10px',
									lg: '0px',
									xl: '10px',
									'2xl': '0px',
								}}
								boxShadow=""
								variant="darkBrand"
								color="white"
								fontSize="sm"
								fontWeight="500"
								borderRadius="70px"
								px="24px"
								py="5px"
							>
								Explore
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Card>
		</Link>
	)
}

export default AirdropProject
