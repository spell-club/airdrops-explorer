import { RefObject, ChangeEvent, useState } from 'react'
import {
	Text,
	Button,
	Flex,
	Input,
	FormLabel,
	FormControl,
	InputGroup,
	InputRightAddon,
} from '@chakra-ui/react'
import { useCalculatorContext, useCalculatorDispatchContext } from 'contexts/CalculatorContext'
import { CalendarIcon } from '@chakra-ui/icons'
import { formatValue } from '../../utils'

interface CalculatorFormInputProps {
	inputRef?: RefObject<HTMLInputElement>
	placeholder: string
	id: string
	label: string
	adon?: string
	[x: string]: unknown
}

const CalculatorFormInput = ({
	inputRef,
	placeholder,
	id,
	label,
	adon,
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
	const { setValidatorFee, calculate } = useCalculatorDispatchContext()
	const { isLoading, currentAmount, initialAmountUsd, validatorFee, startDate } =
		useCalculatorContext()
	const [inputAmount, setAmount] = useState<number>(currentAmount)

	console.log('calculator form render')

	return (
		<Flex align="center" flexDir="column" gap={4} w="400px">
			<CalculatorFormInput
				value={inputAmount || ''}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}
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
				value={validatorFee}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setValidatorFee(Number(e.target.value))}
				id="fee"
				placeholder="%"
				min={0}
				label="Validator fee"
				adon="%"
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
						{startDate}
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
				onClick={() => calculate(inputAmount)}
				isLoading={isLoading}
			>
				Calculate
			</Button>
		</Flex>
	)
}

export default CalculatorForm
