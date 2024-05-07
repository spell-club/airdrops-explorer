import { Box, Flex, Text } from '@chakra-ui/react'

const CustomTooltip = (props: any) => {
	const { active, payload, label, customValueFormatter } = props
	if (active && payload && payload.length) {
		return (
			<Flex flexDir="column" fontSize={12}>
				<Box
					bg="black"
					px={2}
					py={1}
					borderRadius={6}
					borderBottom="1px solid"
					borderColor="grey"
					borderBottomRadius={0}
				>
					{label}
				</Box>
				<Flex flexDir="column" bg="blackAlpha.500" p={2} gap={3} borderBottomRadius={6}>
					{payload.map((item: any) => (
						<Flex align="center" gap={2} key={item.dataKey}>
							<Flex align="center" gap={1}>
								<Box boxSize={2.5} borderRadius="50%" bg={item.color} />
								<Text>{item.dataKey}:</Text>
							</Flex>{' '}
							<Text fontWeight={600}>
								{customValueFormatter
									? customValueFormatter(item.payload[item.dataKey], item.dataKey, item.payload)
									: item.payload[item.dataKey]}
							</Text>
						</Flex>
					))}
				</Flex>
			</Flex>
		)
	}
}

export default CustomTooltip
