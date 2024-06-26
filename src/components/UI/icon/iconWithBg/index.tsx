import { chakra, Flex, Image } from '@chakra-ui/react'

interface Props {
	className?: string
	icon: string
	alt: string
}

const IconWithBg = chakra(({ className, icon, alt }: Props) => (
	<Flex
		p={0.5}
		className={className}
		justify="center"
		align="center"
		borderRadius="50%"
		bg="black"
		zIndex="1"
	>
		<Image borderRadius="50%" w="100%" src={icon} alt={alt} />
	</Flex>
))

export default IconWithBg
