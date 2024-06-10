import {
	Flex,
	Text,
	Heading,
	Box,
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	AccordionIcon,
} from '@chakra-ui/react'

export default function AirdropAlert() {
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
				Cosmos Airdrop Alert
			</Heading>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				What is an Airdrop Alert?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				An airdrop alert is a notification service designed to inform you about newly released
				Cosmos airdrops so you can act quickly to claim and benefit from them.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why Subscribe to SpellDrop Airdrop Alerts?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Subscribing to SpellDrop&apos;s Airdrop Alerts means you&apos;ll never miss out on potential
				airdrops. These alerts are crucial for anyone looking to enhance their airdrop experience
				without constantly monitoring the market. Whether you&apos;re interested in traditional
				Cosmos airdrops or exclusive ATOM airdrop events, our alerts ensure you&apos;re always in
				the know.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Airdrop Alerts and Security
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Security is our top priority. We protect your personal information with advanced security
				measures while ensuring that you have safe and reliable access to airdrop opportunities.
				Additionally, we provide best practices for safely participating in airdrops, helping you
				avoid common pitfalls and scams.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Subscribe Now
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Ready to dive into the world of airdrops? Subscribe to SpellDrop Airdrop Alerts today and
				start receiving timely updates on the latest airdrop opportunities in the Cosmos ecosystem.
				Don’t miss out — empower your crypto journey with us.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				FAQ
			</Heading>

			<Accordion defaultIndex={[0]} allowMultiple w="100%" mb={{ base: '20px', md: '36px' }}>
				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How often will I receive airdrop alerts?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Alerts are sent as soon as new airdrops are announced, ensuring you get the information
						in real-time.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What information is included in an airdrop alert?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Each alert includes detailed information about the airdrop, how to participate, any
						eligibility criteria, and important deadlines.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How can I unsubscribe from airdrop alerts?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						You can unsubscribe at any time via a link at the bottom of each alert email. Your
						privacy and convenience are our top priorities.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Are the airdrop alerts tailored to specific regions or global?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Our airdrop alerts are global, as long as the airdrop itself is open to participants
						from your region. We provide information relevant to all our users around the world.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How do I ensure I don’t miss an alert?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						To make sure you receive all alerts, add our email address to your trusted sender list.
						This prevents our emails from going into your spam or junk folder.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can I receive alerts for specific types of airdrops only?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Currently, our alerts cover all new airdrops within the Cosmos ecosystem without the
						option to select specific types. We aim to keep all our users equally informed about
						every opportunity.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What should I do if I believe an airdrop alert is a scam?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Safety is crucial. If any alert seems suspicious, please do not proceed with
						participating in the airdrop. Contact us directly for verification and assistance.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How are airdrop alerts verified?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						All airdrop alerts are vetted and verified by our team. We ensure that each alert is
						from a reputable source within the Cosmos ecosystem to safeguard our users&apos;
						interests.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Do I need a SpellDrop account to receive airdrop alerts?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						No, you do not need a SpellDrop account to sign up for airdrop alerts. However, creating
						an account can enhance your experience with additional features and personalized
						information.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Flex>
	)
}
