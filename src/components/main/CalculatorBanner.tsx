// Chakra imports
import { Button, Flex, Text, Input } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useCalculatorDispatchContext } from 'contexts/CalculatorContext'

// Assets

export default function CalculatorBanner() {
	const inputRef = useRef<HTMLInputElement>(null)
	const { push } = useRouter()
	const { setAmount } = useCalculatorDispatchContext()
	const [isLoading, setIsLoading] = React.useState(false)

	const onCalculate = () => {
		if (!inputRef.current?.value) return
		setIsLoading(true)
		setAmount(Number(inputRef.current?.value))
		push('/calculator')
		setTimeout(() => setIsLoading(false), 1000)
	}

	return (
		<Flex bg="navy.800" bgSize="cover" borderRadius="30px" pos="relative">
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
				<Text fontSize="md" color="#E3DAFF" fontWeight="500" mb="40px" lineHeight="28px">
					Drop your cosmos stake size and see how much you can earn
				</Text>
				<Flex align="center" borderRadius={30} w="fit-content" gap={4}>
					<Input
						w="400px"
						border="1px solid"
						borderColor="navy.700"
						ref={inputRef}
						variant="search"
						fontSize="sm"
						bg={'navy.900'}
						color={'gray.100'}
						fontWeight="500"
						_placeholder={{ color: 'gray.400', fontSize: '14px' }}
						borderRadius={'30px'}
						placeholder={'Enter amount...'}
					/>
					<Button
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
					>
						Calculate
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}
