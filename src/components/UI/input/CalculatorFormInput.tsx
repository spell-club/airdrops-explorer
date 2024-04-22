import { RefObject } from 'react'
import { FormControl, FormLabel, Input, InputGroup, InputRightAddon } from '@chakra-ui/react'

interface CalculatorFormInputProps {
	inputRef?: RefObject<HTMLInputElement>
	placeholder?: string
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

		<InputGroup>
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
				borderRight={adon ? 'none' : '1px solid'}
				{...rest}
			/>

			<InputRightAddon
				border="1px solid"
				borderColor="navy.700"
				h="50px"
				bg="navy.900"
				borderRightRadius="20px"
				color={'gray.400'}
			>
				{adon}
			</InputRightAddon>
		</InputGroup>
	</FormControl>
)

export default CalculatorFormInput
