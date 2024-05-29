import { Flex, Text, Heading } from '@chakra-ui/react'

export default function BlogText() {
	return (
		<Flex
			bg="navy.800"
			bgSize="cover"
			borderRadius="30px"
			pos="relative"
			py={{ base: '30px', md: '56px' }}
			px={{ base: '30px', md: '64px' }}
			justify="center"
			flexDir="column"
			mt="20px"
		>
			<Heading
				fontSize={{ base: '24px', md: '34px' }}
				textAlign="center"
				color="white"
				mb={{ base: '32px', md: '78px' }}
				fontWeight="700"
				lineHeight={{ base: '32px', md: '42px' }}
				as="h1"
			>
				SpellDrop Blog
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Welcome to the SpellDrop Blog: Your Hub for Cosmos Airdrops Guides
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Introduction
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				At SpellDrop, we&apos;re passionate about making the world of Cosmos airdrops accessible and
				rewarding for everyone. Whether you&apos;re just beginning to explore blockchain or are a
				seasoned staker in the Cosmos network, our blog is designed to provide you with the insights
				and tools needed to effectively engage with airdrops and maximize your blockchain potential.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why Airdrops?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Airdrops are more than just free tokens; they are a gateway to deeper involvement in the
				blockchain community. Here at SpellDrop, we believe that by simplifying the process and
				removing barriers, we can empower every individual to take part in the exciting
				opportunities that airdrops offer. Each article, guide, and update on our blog serves this
				mission by delivering actionable insights and expert advice directly to you.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				In-Depth Insights and Practical Advice
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Our blog dives deep into the mechanics of airdrops, offering detailed explorations of how to
				participate effectively and safely. We cover everything from the basics of what airdrops
				are, to advanced strategies for maximizing your returns, to critical advice on avoiding
				common pitfalls and scams.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Enhancing Your Blockchain Experience
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				SpellDrop is dedicated to making your interaction with blockchain smooth, intuitive, and
				productive. Each blog entry is crafted to clarify the complexities of airdrops and provide
				actionable insights that you can apply immediately. We aim to not only inform but also
				inspire you to explore new opportunities within the Cosmos network.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Stay Informed, Stay Engaged
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				As the blockchain world evolves, so does our content. We continuously update our blog with
				the latest information, trends, and tips to keep you at the forefront of the airdrop scene.
				Engage with our content, leave comments, ask questions, and become part of a community of
				like-minded individuals who are as excited about blockchain as we are.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Join Our Community
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				At SpellDrop, every click, every read, and every interaction is a step towards unlocking the
				full potential of your digital assets. We invite you to join us on this journey to transform
				how you engage with the blockchain. Subscribe to our blog, follow our updates, and never
				miss out on the next big opportunity in the Cosmos ecosystem.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Your Partner in Blockchain Exploration
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				With SpellDrop, you are always one step ahead in the world of blockchain airdrops. Let us
				help you navigate this exciting journey with confidence and success. Welcome aboard —
				together, we&apos;ll explore the limitless possibilities of Cosmos airdrops!
			</Text>
		</Flex>
	)
}
