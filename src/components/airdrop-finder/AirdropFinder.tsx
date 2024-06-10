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

export default function AirdropFinder() {
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
				Cosmos Airdrop Finder
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Welcome to the Cosmos Airdrop Finder on SpellDrop! Whether you&apos;re deeply involved in
				the Cosmos ecosystem or just starting out, our tool is designed to help you uncover and
				claim airdrops that you might not even know you have. Our service scans the Cosmos
				blockchain to find unclaimed airdrops and potential treasures lying dormant in your wallet.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				How It Works
			</Heading>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Simple and Effective:
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
						Enter Your Address
					</Text>
					<Text>Place your Cosmos compatible wallet address in the search bar.</Text>
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
						Instant Discovery
					</Text>
					<Text>
						Click &quot;Check My Wallet&quot; to let our system analyze your address for any
						unclaimed airdrops associated with your wallet.
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
						Claim Your Tokens
					</Text>
					<Text>
						Follow our straightforward guidance to claim any unclaimed tokens and get the data
						according to all the airdrops listed on our website.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why Use SpellDrop&apos;s Airdrop Finder?
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
						Maximize Your Investments
					</Text>
					<Text>
						Many users are unaware of unclaimed airdrops that could add significant value to their
						portfolios. Our tool ensures you never miss out on free tokens.
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
						User-Friendly Interface
					</Text>
					<Text>
						With just a few clicks, you can discover airdrops tied to your wallet. Our platform is
						designed for ease of use, making it accessible for everyone, regardless of technical
						expertise.
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
						Regular Updates
					</Text>
					<Text>
						SpellDrop keeps the tool updated with the latest airdrops and changes in the Cosmos
						ecosystem, ensuring you have access to the most current information.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				What Makes Our Tool Unique?
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
						Focused on Cosmos
					</Text>
					<Text>
						While other platforms might overlook specific ecosystems, our tool is specifically
						designed for the Cosmos network, providing tailored results and more precise findings.
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
						Security First
					</Text>
					<Text>
						Your wallet’s security is paramount. Our tool requires no private keys or personal
						information beyond your public wallet address.
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
								How often should I check for unclaimed airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						We recommend checking your wallet periodically, especially after participating in new
						Cosmos projects or community events.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What should I do if I find unclaimed airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						SpellDrop provides detailed instructions on how to claim your airdrops safely and
						efficiently. Simply follow the steps outlined for each unclaimed item.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Is there a fee to use the Airdrop Finder?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						No, SpellDrop offers this tool for free to enhance user experience and help our
						community members maximize their blockchain assets.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can I use multiple wallet addresses with the Airdrop Finder?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Yes, you can check multiple wallet addresses. This feature allows you to manage and
						review all your assets across different wallets, maximizing your potential to claim
						airdrops from various engagements within the Cosmos ecosystem.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What happens if I find airdrops from projects I’m unfamiliar with?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						If you discover unclaimed airdrops from unknown projects, we recommend doing thorough
						research before claiming them. SpellDrop provides links to official project sites and
						resources, ensuring you can verify the legitimacy and potential of these airdrops
						safely.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Are there any risks involved in using the Airdrop Finder?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						The Airdrop Finder is designed to be safe and risk-free, as it only requires your public
						wallet address to operate. However, always ensure that you never share your private keys
						or personal security information.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How accurate and up-to-date is the airdrop information provided?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						SpellDrop strives to keep all airdrop information as accurate and current as possible.
						Our team regularly updates our database with information directly from the Cosmos
						blockchain and trusted community sources. However, due to the dynamic nature of
						blockchain and airdrops, we recommend double-checking any large or suspicious airdrops
						with the projects directly.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How does SpellDrop ensure the privacy and security of my data?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						SpellDrop prioritizes user privacy and security. Our Airdrop Finder tool uses only your
						public wallet address to scan for airdrops and does not store any wallet data after the
						search is completed. All analyses are performed securely to ensure that your information
						remains private.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can I suggest features or improvements for the Airdrop Finder?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Absolutely! We value community feedback and are committed to improving our tools to
						better serve your needs. Please feel free to send us suggestions or feedback through our
						contact page.
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Ready to Discover Your Unclaimed Airdrops?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Don’t let potential benefits slip through your fingers. Enter your wallet address today and
				start recovering unclaimed assets that belong to you. Visit SpellDrop’s Airdrop Finder and
				let us help you unlock the full potential of your investments in the Cosmos ecosystem.
			</Text>
		</Flex>
	)
}
