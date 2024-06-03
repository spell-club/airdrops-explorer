import { Flex, Text, Heading, Box, SimpleGrid } from '@chakra-ui/react'

export default function Airdrops() {
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
				Our Latest Cosmos Airdrop List
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Welcome to SpellDrop, the definitive source for the latest Cosmos airdrops in 2024. As the
				Cosmos ecosystem continues to evolve, staying updated with the most recent airdrops is
				crucial for anyone interested in the frontier of blockchain technology. At SpellDrop, we
				provide an exclusive, meticulously curated list of the newest airdrops, giving you direct
				access to emerging opportunities within this dynamic network.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why Engage with the Latest Cosmos Airdrops?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Engaging with the latest airdrops within the Cosmos ecosystem offers several key advantages:
			</Text>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb={{ base: '20px', md: '40px' }}>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Early Access to New Airdrops of 2024
					</Text>
					<Text>
						By participating in airdrops, you gain early access to tokens that can play significant
						roles in new decentralized applications and systems. This early engagement can provide a
						strategic advantage as these technologies mature.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Direct Involvement in Project Growth
					</Text>
					<Text>
						Airdrops are often used by projects to distribute tokens to a broad user base, enhancing
						decentralization and engagement. By receiving and holding these tokens, you contribute
						to the project&apos;s network effects and long-term viability.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Portfolio Diversification
					</Text>
					<Text>
						New tokens often come with the potential for appreciation. Adding them to your portfolio
						can help spread risk and increase potential returns.
					</Text>
				</Flex>
			</SimpleGrid>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Exploring the Latest Airdrops on SpellDrop
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Our platform ensures that you are well-prepared to take part in each airdrop with
				confidence. Here’s how you can engage with the latest offerings:
			</Text>

			<Box as="ul" listStyleType="none" padding="0" mb={{ base: '20px', md: '40px' }}>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						Comprehensive Project Details
					</Text>
					<Text>
						For every listed airdrop, SpellDrop provides detailed information about the project’s
						background, mission, and the specific utility of the tokens being distributed.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						Participation Guidelines
					</Text>
					<Text>
						We provide clear, step-by-step instructions on how to qualify for each airdrop,
						including necessary actions like joining a project’s social media channels, interacting
						with its community, or holding specific tokens beforehand.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						Security Assurance
					</Text>
					<Text>
						All airdrops listed on SpellDrop are vetted for security and authenticity, ensuring that
						your engagement is safe and your investments are protected.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Stay Updated with Real-Time Airdrop Notifications
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				SpellDrop offers more than just a list; we ensure that you receive timely updates about new
				airdrops as they become available. By subscribing to our notifications:
			</Text>

			<Box as="ul" listStyleType="none" padding="0" mb={{ base: '20px', md: '40px' }}>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						You’ll receive alerts as soon as new airdrops are announced.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						You&apos;ll get reminders about airdrop deadlines, helping you manage your participation
						effectively.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						You’ll have access to exclusive insights from airdrop organizers and early reports on
						token performance post-airdrop.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why SpellDrop is Your Go-To Platform for Cosmos Airdrops
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				SpellDrop is not just a platform; it&apos;s your partner in navigating the complex world of
				cryptocurrency airdrops. Here&apos;s why thousands of users trust us:
			</Text>

			<Box as="ul" listStyleType="none" padding="0" mb={{ base: '20px', md: '40px' }}>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						Direct Access
					</Text>
					<Text>
						Immediate access to airdrops without the need for sign-ups or pre-qualifications.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						Expertise
					</Text>
					<Text>
						Our team&apos;s deep understanding of the blockchain space enables us to select only the
						most promising airdrops, ensuring you participate in opportunities with real potential.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text
						mb="20px"
						fontWeight="bold"
						position="relative"
						_before={{
							content: '""',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							bg: 'white',
							position: 'absolute',
							top: '50%',
							left: '-15px',
							transform: 'translateY(-50%)',
						}}
					>
						Community and Educational Resources
					</Text>
					<Text>
						Join a vibrant community of enthusiasts and leverage our educational resources to better
						understand the blockchain projects you engage with.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Join Us on the Journey to Blockchain Excellence
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				At SpellDrop, every click brings you closer to the future crypto. Whether you&apos;re a
				seasoned investor or a curious newcomer, our platform equips you with the tools and
				knowledge you need to succeed in the evolving world of Latest Cosmos Airdrops. Join us to
				stay at the forefront of the latest airdrops of Cosmos ecosystem.
			</Text>
		</Flex>
	)
}
