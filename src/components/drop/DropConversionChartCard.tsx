import React from 'react';
import Card from '../card/Card';
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import CircularChart from '../charts/DonutChart';
import { VSeparator } from '../separator/Separator';
import numbro from 'numbro';
import { roundToPrecision } from 'utils';
import { AirdropProject } from 'api/types';

interface Props {
	project: AirdropProject;
}

const DropConversionChartCard = ({ project }: Props) => {
	const bg = useColorModeValue('whiteAlpha.800', 'navy.800');
	const {
		total_allocated: totalAllocated,
		total_claimed: totalClaimed,
		total_claimed_usd: totalClaimedUsd,
		total_allocated_usd: totalAllocatedUsd,
		token_symbol: tokenSymbol,
		total_reallocated,
		total_reallocated_usd,
		eligible_users_num: eligibleUsersNum,
		claimers_num: claimersNum,
	} = project;

	const conversion = roundToPrecision({
		value: (totalClaimedUsd / totalAllocatedUsd) * 100,
		precision: 2,
		method: 'floor',
	});

	const formattValue = (value: number) => {
		const truncatedAmount = roundToPrecision({
			value,
			precision: 0,
			method: 'floor',
		});

		const roundFormat = {
			trimMantissa: true,
			thousandSeparated: true,
		};

		return String(numbro(truncatedAmount).format(roundFormat));
	};

	const isRelocatedStatExist = total_reallocated && total_reallocated_usd;

	const claimersRate = roundToPrecision({
		value: (claimersNum / eligibleUsersNum) * 100,
		precision: 2,
		method: 'floor',
	});

	return (
		<Card p="20px" alignItems="center" flexDirection="column" w="100%" bg={bg}>
			<Flex flexDir="column" align="center" gap={4}>
				<Text fontSize={20} fontWeight={600}>
					Allocation Info
				</Text>
				<Flex gap={5}>
					<Flex flexDir="column" align="center" gap={4}>
						<CircularChart value={conversion}>
							<Flex flexDir="column" align="center">
								<Text color="gray.400" fontSize={14}>
									Claimed Amount
								</Text>
								<Text fontSize={20} fontWeight={600}>
									{conversion}%
								</Text>
							</Flex>
						</CircularChart>
					</Flex>

					{isRelocatedStatExist && (
						<CircularChart value={claimersRate} color="#39B8FF">
							<Flex flexDir="column" align="center">
								<Text color="gray.400" fontSize={14}>
									Claimers
								</Text>
								<Text fontSize={20} fontWeight={600}>
									{claimersRate}%
								</Text>
							</Flex>
						</CircularChart>
					)}
				</Flex>

				<Flex
					gap={5}
					px={10}
					py={4}
					boxShadow="rgba(112, 144, 176, 0.08) 4px 1px 10px 4px"
					borderRadius={20}
				>
					<Flex flexDir="column" gap={5}>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Allocated $
							</Text>
							<Text fontSize={20} fontWeight={600}>
								${formattValue(totalAllocatedUsd)}
							</Text>
						</Flex>

						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Allocated {tokenSymbol}
							</Text>
							<Text fontSize={20} fontWeight={600}>
								{formattValue(totalAllocated)}
							</Text>
						</Flex>
					</Flex>

					<VSeparator />

					<Flex flexDir="column" gap={5}>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Claimed $
							</Text>
							<Text fontSize={20} fontWeight={600}>
								${formattValue(totalClaimedUsd)}
							</Text>
						</Flex>

						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Claimed {tokenSymbol}
							</Text>
							<Text fontSize={20} fontWeight={600}>
								{formattValue(totalClaimed)}
							</Text>
						</Flex>
					</Flex>

					<VSeparator />

					<Flex flexDir="column" gap={5}>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Missed $
							</Text>
							<Text fontSize={20} fontWeight={600}>
								${formattValue(totalAllocatedUsd - totalClaimedUsd)}
							</Text>
						</Flex>
						<Flex flexDir="column" align="center">
							<Text fontSize={14} color="gray.400">
								Missed {tokenSymbol}
							</Text>
							<Text fontSize={20} fontWeight={600}>
								{formattValue(totalAllocated - totalClaimed)}
							</Text>
						</Flex>
					</Flex>

					{isRelocatedStatExist ? (
						<>
							{' '}
							<VSeparator />
							<Flex flexDir="column" gap={5}>
								<Flex flexDir="column" align="center">
									<Text fontSize={14} color="gray.400">
										Reallocated $
									</Text>
									<Text fontSize={20} fontWeight={600}>
										${formattValue(total_reallocated_usd)}
									</Text>
								</Flex>
								<Flex flexDir="column" align="center">
									<Text fontSize={14} color="gray.400">
										Reallocated {tokenSymbol}
									</Text>
									<Text fontSize={20} fontWeight={600}>
										{formattValue(total_reallocated)}
									</Text>
								</Flex>
							</Flex>{' '}
						</>
					) : null}
				</Flex>
			</Flex>
		</Card>
	);
};

export default DropConversionChartCard;
