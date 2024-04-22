import { Center, chakra, Spinner } from '@chakra-ui/react'

const Loader = chakra(({ className }) => (
	<Center className={className}>
		<Spinner />
	</Center>
))

export default Loader
