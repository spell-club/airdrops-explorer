import { Button, Flex, Text } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCalculatorDispatchContext } from 'contexts/CalculatorContext'
import CalculatorFormInput from '../UI/input/CalculatorFormInput'

export default function CalculatorBanner() {
	const [inputAmount, setInputAmount] = useState<number>(0)
	const { push } = useRouter()
	const { setAmount, calculate } = useCalculatorDispatchContext()
	const [isLoading, setIsLoading] = React.useState(false)

	const onCalculate = () => {
		if (!inputAmount) return
		setIsLoading(true)
		setAmount(inputAmount)
		calculate(inputAmount)
		push('/calculator')
		setTimeout(() => setIsLoading(false), 1000)
	}

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && inputAmount) {
			onCalculate()
		}
	}

	return (
		<Flex
			bg="navy.800"
			bgSize="cover"
			borderRadius="30px"
			pos="relative"
			justify={{ base: 'center', md: 'start' }}
		>
			<Flex
				flexDir="column"
				py={{ base: '30px', md: '56px' }}
				px={{ base: '30px', md: '64px' }}
				pos="relative"
				zIndex={2}
			>
				<Text
					fontSize={{ base: '24px', md: '34px' }}
					color="white"
					mb="14px"
					fontWeight="700"
					lineHeight={{ base: '32px', md: '42px' }}
				>
					Calculate your potential airdrop rewards
				</Text>
				<Text
					fontSize="md"
					color="#E3DAFF"
					fontWeight="500"
					mb={{ base: '20px', md: '40px' }}
					lineHeight="28px"
				>
					Drop your cosmos stake size and see how much you can earn
				</Text>
				<Flex
					align="center"
					borderRadius={30}
					flexDir={{ base: 'column', md: 'row' }}
					justify="center"
					w="100%"
					gap={4}
				>
					<CalculatorFormInput
						value={inputAmount || ''}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setInputAmount(Number(e.target.value))}
						id="amount"
						min={0}
						label=""
						adon="ATOM"
						placeholder=""
						onKeyDown={handleKeyDown}
						autocomplete="off"
					/>
					<Button
						mt={2}
						boxShadow=""
						variant="darkBrand"
						color="white"
						fontSize="sm"
						fontWeight="500"
						borderRadius="70px"
						px="24px"
						py="5px"
						onClick={onCalculate}
						isLoading={isLoading}
						isDisabled={!inputAmount}
					>
						Calculate
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}
