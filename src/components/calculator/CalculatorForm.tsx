import { useRef, RefObject, useEffect } from 'react'
import { Text, Button, Flex, Input, FormLabel, FormControl } from '@chakra-ui/react'
import { useCalculatorContext, useCalculatorDispatchContext } from 'contexts/CalculatorContext'
import { useQueryClient } from '@tanstack/react-query'
import { CalendarIcon } from '@chakra-ui/icons'
import { formatValue } from '../../utils'

interface CalculatorFormInputProps {
	inputRef: RefObject<HTMLInputElement>
	placeholder: string
	id: string
	label: string
	[x: string]: unknown
}

const CalculatorFormInput = ({
	inputRef,
	placeholder,
	id,
	label,
	...rest
}: CalculatorFormInputProps) => (
	<FormControl>
		<FormLabel ml={2} htmlFor={id} fontSize="sm" fontWeight="bold" _hover={{ cursor: 'pointer' }}>
			{label}
		</FormLabel>
		<Input
			id={id}
			type="number"
			w="100%"
			h="50px"
			border="1px solid"
			borderColor="navy.700"
			ref={inputRef}
			variant="search"
			fontSize="lg"
			bg={'navy.900'}
			color={'gray.100'}
			fontWeight="500"
			_placeholder={{ color: 'gray.400', fontSize: '14px' }}
			borderRadius={'30px'}
			placeholder={placeholder}
			{...rest}
		/>
	</FormControl>
)

const CalculatorForm = () => {
	const amountInputRef = useRef<HTMLInputElement>(null)
	const feeInputRef = useRef<HTMLInputElement>(null)
	const { setAmount, setValidatorFee } = useCalculatorDispatchContext()
	const { isLoading, currentAmount, initialAmountUsd } = useCalculatorContext()
	const client = useQueryClient()

	useEffect(() => {
		if (currentAmount) {
			amountInputRef.current!.value = currentAmount.toString()
		}
	}, [])

	const handleCalculate = () => {
		if (
			!amountInputRef.current?.value ||
			Number(amountInputRef.current?.value) <= 0 ||
			Number(feeInputRef.current?.value) < 0
		) {
			client.invalidateQueries({ queryKey: ['calculator'] })
			return
		}

		setAmount(Number(amountInputRef.current?.value))
		setValidatorFee(Number(feeInputRef.current?.value))
	}

	return (
		<Flex align="center" flexDir="column" gap={4} w="400px">
			<CalculatorFormInput
				inputRef={amountInputRef}
				id="amount"
				placeholder="Atom"
				min={0}
				label="Initial staking amount"
			/>

			{initialAmountUsd ? (
				<Text fontSize="sm" color="gray.400" mt={-3} alignSelf="start" ml={2}>
					≈ ${formatValue(initialAmountUsd, 2)}
				</Text>
			) : null}

			<CalculatorFormInput
				inputRef={feeInputRef}
				id="fee"
				placeholder="%"
				min={0}
				label="Validator fee"
			/>

			<Flex flexDir="column" gap={1} w="100%">
				<FormLabel ml={2} fontSize="sm" fontWeight="bold" _hover={{ cursor: 'pointer' }}>
					Staking date
				</FormLabel>

				<Flex
					w="100%"
					h="50px"
					bg="navy.900"
					border="1px solid"
					borderColor="navy.700"
					borderRadius={'30px'}
					justify="start"
					align="center"
					cursor="not-allowed"
					pos="relative"
					px={4}
				>
					<Text fontSize={14} color="gray.400">
						01.01.2021
					</Text>
					<CalendarIcon pos="absolute" color="gray.400" right={5} />
				</Flex>
			</Flex>

			<Button
				boxShadow=""
				variant="darkBrand"
				color="white"
				fontSize="sm"
				fontWeight="500"
				borderRadius="70px"
				px="24px"
				py="5px"
				onClick={handleCalculate}
				isLoading={isLoading}
			>
				Calculate
			</Button>
		</Flex>
	)
}

export default CalculatorForm
