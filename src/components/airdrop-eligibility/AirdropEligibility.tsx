import {
	Flex,
	Text,
	Heading,
	Box,
	SimpleGrid,
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	AccordionIcon,
} from '@chakra-ui/react'

export default function AirdropEligibility() {
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
				Your Eligibility for Cosmos Airdrops
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Welcome to SpellDrop, your go-to resource for navigating the exciting world of Cosmos
				airdrops. Understanding and confirming your eligibility is crucial for participating in
				these opportunities. This page is dedicated to helping you determine how to qualify for
				airdrops, check your eligibility, and address common issues regarding airdrop participation.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				How to Qualify for Cosmos Airdrops?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Qualifying for airdrops within the Cosmos ecosystem typically involves a few key steps:
			</Text>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb={{ base: '20px', md: '40px' }}>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Token Holdings
					</Text>
					<Text>
						Many airdrops require you to hold a specific amount of a particular token at the time of
						a snapshot. Ensure your wallet contains the required tokens by the snapshot date.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Active Participation
					</Text>
					<Text>
						Some airdrops may require active participation in the project’s community through
						forums, social media, or direct contributions to the project.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Registration Requirements
					</Text>
					<Text>
						Occasionally, you may need to register or sign up specifically for the airdrop through
						the project’s official channels.
					</Text>
				</Flex>
			</SimpleGrid>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				How to Check for Airdrop Eligibility?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				To check your eligibility for an upcoming airdrop:
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
						Visit the Airdrop Page
					</Text>
					<Text>
						Go to the specific airdrop page on SpellDrop, which lists all the criteria and
						requirements.
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
						Enter Your Cosmos Address
					</Text>
					<Text>
						Use our eligibility checker tool by entering your Cosmos address to see if it meets the
						airdrop’s requirements
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
						Review Requirements
					</Text>
					<Text>
						Make sure you understand all the listed requirements such as minimum token holdings,
						wallet setup, and any necessary community interactions.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why Is My Wallet Not Eligible for Airdrops?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				If you find your wallet is not eligible for an airdrop, consider the following:
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
						Snapshot Timing
					</Text>
					<Text>
						Ensure that your wallet held the required tokens before the snapshot was taken.
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
						Wallet Type
					</Text>
					<Text>
						Some airdrops only support specific types of wallets. Verify that your wallet type is
						supported.
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
						Compliance with Requirements
					</Text>
					<Text>
						Double-check that you have met all other specified requirements like registration or
						community participation.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				How Do I Check My Airdrop Eligibility?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				SpellDrop provides a simple tool for users to check their eligibility:
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
						Access the Eligibility Tool
					</Text>
					<Text>Located on each airdrop’s dedicated page.</Text>
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
						Input Your Details
					</Text>
					<Text>
						Enter your Cosmos wallet address to receive an instant report on your eligibility
						status.
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
						Review the Feedback
					</Text>
					<Text>
						The tool will inform you of any criteria you did not meet and provide guidance on how to
						rectify any issues.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Frequently Asked Questions
			</Heading>

			<Accordion defaultIndex={[0]} allowMultiple w="100%" mb={{ base: '20px', md: '36px' }}>
				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What happens if I miss a snapshot?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Unfortunately, if you miss the snapshot, you will not be eligible for that particular
						airdrop. However, keep your wallet prepared for future opportunities.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can I use multiple wallets?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Yes, you can use multiple wallets to increase your chances of qualifying for various
						airdrops, provided each wallet meets the individual airdrop’s criteria.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How often should I check my eligibility?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						It’s best to check your eligibility as soon as an airdrop is announced and regularly
						until the snapshot date to ensure compliance with all requirements.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What if I don&apos;t see my eligibility status after using the search bar?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Ensure that the wallet address entered is correct and registered if required by the
						airdrop. If issues persist, it could be due to the updating process in our database.
						Please wait a few minutes and try again or contact our support for direct assistance.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How accurate is the eligibility information provided by the search bar?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Our search bar pulls data directly from the blockchain and our internal databases, which
						are updated regularly. However, always confirm that your wallet’s contents have not
						changed significantly after the last update, especially close to the snapshot date.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can I improve my chances of qualifying for future airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Yes, by increasing your activity within the Cosmos ecosystem and ensuring you hold the
						necessary tokens well before the expected snapshot dates, you can improve your chances.
						Regularly check the upcoming airdrops on SpellDrop and adjust your portfolio
						accordingly.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What should I do if my wallet is not supported for an airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Some airdrops may only support specific wallet types. If your wallet is not supported,
						consider transferring your holdings to a compatible wallet before the snapshot date.
						Check each airdrop’s specific requirements for wallet compatibility on the SpellDrop
						platform.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Why is participation in community activities important for some airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Engagement with the project’s community is often a criterion to ensure that the airdrop
						reaches active and contributing members. This can involve social media engagement,
						contributions to forums, or even code contributions for developer-focused projects.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Stay Prepared with SpellDrop
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				With SpellDrop, you’re never alone in navigating the complexities of airdrop eligibility.
				Our platform is designed to provide you with all the necessary tools and information to
				successfully participate in Cosmos airdrops. Stay tuned to our updates, and ensure you are
				always ready to take advantage of these exciting opportunities in the blockchain world.
			</Text>
		</Flex>
	)
}
