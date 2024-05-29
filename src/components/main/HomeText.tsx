import {
	Flex,
	Text,
	Heading,
	SimpleGrid,
	Box,
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	AccordionIcon,
} from '@chakra-ui/react'

export default function HomeText() {
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
				First Cosmos Airdrop Checker and Tracker
			</Heading>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Optimize Your Cosmos Ecosystem Investments
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				SpellDrop offers the best crypto airdrop platform designed to enhance your experience within
				the Cosmos ecosystem. By combining advanced tracking tools with user-friendly interfaces,
				SpellDrop enables you to not only discover but also track and claim airdrops tailored to
				your interests in the Cosmos network.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				What is Cosmos Airdrop Checker?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				The Cosmos Airdrop Checker is the best airdrop tool designed to ease the process of tracking
				and claiming airdrops for users within the Cosmos ecosystem. By simply entering a wallet
				address, the tool quickly displays a list of available and upcoming airdrops, detailing
				eligibility and claim processes. It ensures users never miss out on potential rewards by
				providing timely notifications and easy access to claim procedures. This checker is vital
				for anyone looking to maximize their participation in Cosmos airdrops without the hassle of
				manual tracking.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				What is a Cosmos Airdrop?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				An airdrop in the Cosmos ecosystem is a method used by blockchain projects to distribute
				tokens directly to the wallets of users, usually for free. This is often done to increase
				the token&apos;s distribution, encourage user engagement, and incentivize participation
				within the ecosystem. Airdrops are popular among new projects looking to build a community
				or existing projects aiming to reward loyal supporters.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Discover Recent Cosmos Airdrops
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Every user may try a detailed and up-to-date list of the most recent airdrops across the
				Cosmos network. Each entry in our interactive display features:
			</Text>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb={{ base: '20px', md: '40px' }}>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Project Name
					</Text>
					<Text>Even with visual icons for quick recognition!</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Airdrop Details
					</Text>
					<Text>Average amount and total distributed tokens</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Explore Button
					</Text>
					<Text>
						Direct links to deep dive into each project for more detailed information and claiming
						processes.
					</Text>
				</Flex>
			</SimpleGrid>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Our layout is designed to provide you with quick insights and easy access to the airdrops
				that matter most to you.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Top Claimers and Airdrop Insights
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Stay informed with real-time updates on the biggest claimers in the Cosmos airdrop scene.
				This section highlights:
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
						Top Claimers
					</Text>
					<Text>
						Addresses and amounts claimed to recognize the active participants in the ecosystem.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px">
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
						Top Losers
					</Text>
					<Text>
						Click ‘Calculate’ to view a comprehensive breakdown of your investments&apos;
						performance, including staking rewards and individual airdrops.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Airdrop Calculator: Estimate Your Potential Rewards
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Our innovative Airdrop Calculator allows you to estimate potential rewards based on your
				current Cosmos holdings:
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
						Simple Input
					</Text>
					<Text>Drop your Cosmos stake size into the calculator.</Text>
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
						Instant Calculations
					</Text>
					<Text>See how much you could earn from participating in various airdrops.</Text>
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
						Customized Results
					</Text>
					<Text>
						Tailored information to help you make informed decisions about when to increase your
						stakes to qualify for more lucrative airdrops.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Dive into Airdrop Analytics
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Gain insights and make informed decisions with our detailed analytics section:
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
						Market Trends
					</Text>
					<Text>
						Understand how different airdrops perform post-distribution, and the impact on token
						value over time.
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
						Claiming Statistics
					</Text>
					<Text>
						View real-time data on claim rates and patterns to gauge community engagement and
						potential airdrop success.
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
						Historical Data Comparison
					</Text>
					<Text>
						Compare your airdrop performance with historical data to spot trends and forecast future
						possibilities.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why Choose SpellDrop for Your Cosmos Airdrop Needs?
			</Heading>

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
						Comprehensive Tracking
					</Text>
					<Text>
						From recent airdrops to potential earnings, get all the information you need in one
						place.
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
						User-Centric Design
					</Text>
					<Text>
						Our platform is built with you in mind, ensuring ease of use, security, and reliability.
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
						Community and Support
					</Text>
					<Text>
						Join a growing community of Cosmos enthusiasts and receive expert support and guidance.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				FAQ About Cosmos Airdrops
			</Heading>

			<Accordion defaultIndex={[0]} allowMultiple w="100%" mb={{ base: '20px', md: '36px' }}>
				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How do I participate in Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						To participate in most Cosmos airdrops, you need to hold Cosmos (ATOM) tokens in a
						compatible wallet. Some airdrops might require you to perform specific tasks like
						posting about the project on social media, participating in governance, or being part of
						a community.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Why do Cosmos projects give free airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Airdrops are a promotional tactic used by projects to increase their visibility and
						attract new users. By distributing free tokens, projects can encourage users to explore
						their ecosystem, use their tokens, and potentially invest or engage more deeply with
						their offerings.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Are Cosmos airdrops safe?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						While many airdrops are legitimate, the process is not without risks. Always research
						the project thoroughly and be cautious of airdrops that ask for private keys or direct
						contributions of funds. SpellDrop ensures all listed airdrops undergo rigorous checks,
						but always practice due diligence.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How can I maximize my benefits from Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Keeping informed through platforms like SpellDrop is crucial. Maintaining a diversified
						portfolio of Cosmos-based tokens might increase your eligibility for various airdrops.
						Engaging actively in the Cosmos community can also alert you to upcoming airdrops before
						they are widely announced.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What should I do after receiving an airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Once you receive tokens from an airdrop, decide whether you want to hold them or sell
						them. If you believe in the project&apos;s long-term success, holding might benefit you
						with potential price increases or more airdrop rewards. However, if you are unsure about
						the project&apos;s potential, converting the tokens to more stable assets might be
						safer.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Stay Ahead with SpellDrop
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Ensure you&apos;re always at the forefront of the Cosmos airdrop opportunities with
				SpellDrop. Subscribe to our alerts and get notified about new airdrops as they become
				available. With SpellDrop, you&apos;re always one step ahead in the evolving world of Cosmos
				airdrops.
			</Text>
		</Flex>
	)
}
