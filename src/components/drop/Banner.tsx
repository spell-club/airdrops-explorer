import { Box, Flex, Avatar, Text } from '@chakra-ui/react'

import Card from '../card/Card'
import { VSeparator } from '../UI/separator'

export default function Banner(props: {
	avatar: string | any
	name: string
	airdropDate: string
	snapshotDate: string
	users: string
	[x: string]: any
}) {
	const { avatar, name, airdropDate, snapshotDate, users, ...rest } = props

	return (
		<Card mb="20px" alignItems="center" {...rest} pt={0} px={0}>
			<Box
				opacity="1"
				bgImage="radial-gradient(#a378e1 1.1px, #000614 1.1px)"
				bgSize="22px 22px"
				borderRadius="20px"
				h="150px"
				w="100%"
				borderBottomRadius={0}
			/>
			{avatar && (
				<Avatar
					mx="auto"
					src={avatar}
					h="115px"
					w="115px"
					mt="-63px"
					border="4px solid"
					borderColor="navy.700!important"
				/>
			)}

			<Text fontWeight="bold" fontSize={26} mt="10px">
				{name || 'No data'}
			</Text>

			<Flex
				w="max-content"
				mx="auto"
				mt={{ base: '20px' }}
				flexDir={{ base: 'column', lg: 'row' }}
				justify="center"
				borderRadius={20}
			>
				<Flex mx="auto" alignItems="center" flexDirection="column">
					<Text fontSize="2xl" fontWeight="700">
						{airdropDate || 'No data'}
					</Text>
					<Text color="gray.400" fontSize="sm" fontWeight="400">
						Airdrop Date
					</Text>
				</Flex>
				<VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

				<Flex mx="auto" alignItems="center" flexDirection="column">
					<Text fontSize="2xl" fontWeight="700">
						{snapshotDate || 'No data'}
					</Text>
					<Text color="gray.400" fontSize="sm" fontWeight="400">
						Snapshot Date
					</Text>
				</Flex>

				<VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />

				<Flex mx="auto" alignItems="center" flexDirection="column">
					<Text fontSize="2xl" fontWeight="700">
						{users || 'No data'}
					</Text>
					<Text color="gray.400" fontSize="sm" fontWeight="400">
						Claimers
					</Text>
				</Flex>
			</Flex>
		</Card>
	)
}
