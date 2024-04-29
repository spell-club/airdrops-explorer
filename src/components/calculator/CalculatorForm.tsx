import { ChangeEvent, useState } from 'react'
import { Text, Button, Flex, FormLabel, chakra } from '@chakra-ui/react'
import { useCalculatorContext, useCalculatorDispatchContext } from 'contexts/CalculatorContext'
import { CalendarIcon } from '@chakra-ui/icons'
import { formatValue } from 'utils'
import CalculatorFormInput from 'components/UI/input/CalculatorFormInput'

interface Props {
	validatorFee: number
	setValidatorFee: (fee: number) => void
}

const CalculatorForm = ({ validatorFee, setValidatorFee }: Props) => {
	const { calculate } = useCalculatorDispatchContext()
	const { isLoading, currentAmount, initialAmountUsd, startDate } = useCalculatorContext()
	const [inputAmount, setAmount] = useState<number>(currentAmount)

	const isButtonDisabled = !inputAmount || inputAmount < 0

	return (
		<chakra.form
			onSubmit={(e) => {
				e.preventDefault()
				calculate(inputAmount)
			}}
		>
			<Flex w="100%" justify="center">
				<Flex align="center" flexDir="column" gap={4} w={{ base: '280px', md: '400px' }}>
					<CalculatorFormInput
						value={inputAmount || ''}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value))}
						id="amount"
						min={0}
						label="Initial staking amount"
						adon="ATOM"
						autoComplete="off"
					/>

					{initialAmountUsd ? (
						<Text fontSize="sm" color="gray.400" mt={-3} alignSelf="start" ml={2}>
							≈ ${formatValue(initialAmountUsd, 2)}
						</Text>
					) : null}

					<CalculatorFormInput
						value={validatorFee || ''}
						onChange={(e: ChangeEvent<HTMLInputElement>) => setValidatorFee(Number(e.target.value))}
						id="fee"
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
						isLoading={isLoading}
						isDisabled={isButtonDisabled}
						type="submit"
					>
						Calculate
					</Button>
				</Flex>
			</Flex>
		</chakra.form>
	)
}

export default CalculatorForm
