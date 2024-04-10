// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from '@chakra-ui/react'
// Custom components
import Card from 'components/card/Card'
import PieChart from 'components/charts/PieChart'
import { pieChartData, pieChartOptions } from 'variables/charts'
import { VSeparator } from 'components/separator/Separator'
export default function Conversion(props: { [x: string]: any }) {
	const { ...rest } = props

	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white')
	const cardColor = useColorModeValue('white', 'navy.700')
	const cardShadow = useColorModeValue('0px 18px 40px rgba(112, 144, 176, 0.12)', 'unset')
	return (
		<Card p="20px" alignItems="center" flexDirection="column" w="100%" {...rest}>
			<Flex
				px={{ base: '0px', '2xl': '10px' }}
				justifyContent="center"
				alignItems="center"
				w="100%"
				mb="8px"
				flexDir="column"
				gap={5}
			>
				<Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
					User Conversion
				</Text>

				<Text color="gray.400">Discover your stats and learn more about your bussines users</Text>
			</Flex>

			<PieChart h="100%" w="100%" chartData={pieChartData} chartOptions={pieChartOptions} />
			<Card
				bg={cardColor}
				flexDirection="row"
				boxShadow={cardShadow}
				w="100%"
				p="15px"
				px="20px"
				mt="15px"
				justifyContent="center"
				flexWrap="wrap"
			>
				<Flex direction="column" py="5px">
					<Flex align="center">
						<Box h="8px" w="8px" bg="brand.500" borderRadius="50%" me="4px" />
						<Text fontSize="xs" color="secondaryGray.600" fontWeight="700" mb="5px">
							Your files
						</Text>
					</Flex>
					<Text fontSize="lg" color={textColor} fontWeight="700">
						63%
					</Text>
				</Flex>
				<VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />
				<Flex direction="column" py="5px" me="10px">
					<Flex align="center">
						<Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
						<Text fontSize="xs" color="secondaryGray.600" fontWeight="700" mb="5px">
							System
						</Text>
					</Flex>
					<Text fontSize="lg" color={textColor} fontWeight="700">
						25%
					</Text>
				</Flex>
			</Card>
		</Card>
	)
}
