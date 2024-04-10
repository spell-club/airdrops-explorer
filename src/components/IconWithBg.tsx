import { chakra, Flex, Image } from '@chakra-ui/react'

interface Props {
	className?: string
	icon: string
}

const IconWithBg = chakra(({ className, icon }: Props) => {
	var a = 3
	var b = 3

	return (
		<Flex
			p={0.5}
			className={className}
			justify="center"
			align="center"
			borderRadius="50%"
			bg="black"
			zIndex="1"
		>
			<Image borderRadius="50%" w="100%" src={icon} alt="icon" />
		</Flex>
	)
})

export default IconWithBg
