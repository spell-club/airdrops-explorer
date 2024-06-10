import {
	Flex,
	Text,
	Heading,
	Accordion,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	AccordionIcon,
	Box,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react'

export default function FAQ() {
	return (
		<Flex
			bg="navy.800"
			bgSize="cover"
			borderRadius="30px"
			pos="relative"
			py={{ base: '30px', md: '50px' }}
			px={{ base: '30px', md: '40px' }}
			justify="center"
			flexDir="column"
			mt="20px"
			align="center"
			w={{ base: 'auto', md: '75%', lg: '50%' }}
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
				Cosmos Airdrops FAQ
			</Heading>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }} w="100%">
				Frequently Asked Questions (FAQ)
			</Heading>

			<Text
				fontSize="md"
				color="grey.100"
				fontWeight="500"
				mb={{ base: '20px', md: '40px' }}
				lineHeight="28px"
			>
				Welcome to the most comprehensive FAQ on crypto airdrops in the Cosmos ecosystem. Whether
				you&apos;re new to airdrops or looking to deepen your knowledge, our FAQs are designed to
				answer all your questions and guide you safely through the world of crypto airdrops.
			</Text>

			<Accordion defaultIndex={[0]} allowMultiple w="100%">
				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What is a Cosmos Crypto Airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						A Cosmos airdrop is a method used by Cosmos blockchain projects to distribute free
						tokens directly to the wallets of active members within the Cosmos ecosystem. This
						strategy is used to increase token distribution, incentivize participation, and enhance
						engagement with the Cosmos network.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How do Cosmos airdrops work?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						For most Cosmos airdrops, you need to meet specific requirements determined by the
						project. Common prerequisites may include holding ATOM or other related tokens,
						participating in staking, or completing social media tasks to help promote the project.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What are the different types of Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">Cosmos airdrops typically fall into several categories:</Text>
						<UnorderedList>
							<ListItem>
								<b>Standard Airdrop:</b> Users need to sign up or hold certain Cosmos ecosystem
								tokens.
							</ListItem>
							<ListItem>
								<b>Bounty Airdrop:</b> Requires completing promotional activities such as content
								creation or social sharing.
							</ListItem>
							<ListItem>
								<b>Exclusive Airdrop:</b> Targeted at users based on their engagement or longevity
								within the ecosystem.
							</ListItem>
							<ListItem>
								<b>Holder Airdrop:</b> Distributed to users who hold specific tokens at the time of
								a snapshot.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Why do projects offer Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Projects offer Cosmos airdrops to disseminate tokens widely, create buzz, build a
						supportive community, and increase the tokens&apos; usage across the Cosmos network.
						This strategy helps to attract new users and reward existing community members for their
						loyalty and participation.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How can I find Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Visit the SpellDrop website to access our detailed list of ongoing and past airdrops
						specific to the Cosmos ecosystem. Our platform provides tools like the Airdrop Tracker,
						which offers real-time updates and thorough insights into each project.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What criteria do I need to meet to qualify for a Cosmos airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">What criteria do I need to meet to qualify for a Cosmos airdrop?</Text>
						<UnorderedList>
							<ListItem>Holding a specific amount of ATOM or other relevant tokens.</ListItem>
							<ListItem>Engaging in staking activities.</ListItem>
							<ListItem>
								Completing promotional activities or being an active community member.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How do I receive a Cosmos airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">To receive a Cosmos airdrop, you typically need to:</Text>
						<UnorderedList>
							<ListItem>
								<b>Prepare Your Wallet:</b> Ensure your wallet supports the Cosmos network and is
								set up to receive the specific tokens.
							</ListItem>
							<ListItem>
								<b>Meet the Eligibility Requirements:</b> Complete any necessary tasks or hold the
								required tokens by the snapshot date.
							</ListItem>
							<ListItem>
								<b>Claim the Tokens:</b> Follow the project’s instructions to claim your tokens, if
								required.
							</ListItem>
							<ListItem>
								<b>Receive the Tokens:</b> Airdropped tokens are usually sent directly to your
								wallet on the designated distribution date.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How to check if a Cosmos airdrop is legitimate?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">To verify the legitimacy of a Cosmos airdrop:</Text>
						<UnorderedList>
							<ListItem>
								Research the project extensively — review their official website, whitepaper, and
								team.
							</ListItem>
							<ListItem>Check community feedback and reviews on social media and forums.</ListItem>
							<ListItem>
								Be cautious of airdrops asking for private keys or requiring large pre-payments.
							</ListItem>
							<ListItem>
								Use tools provided by SpellDrop to assess the credibility of the airdrop.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can I sell or trade tokens I receive from a Cosmos airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Yes, you can sell or trade tokens received from a Cosmos airdrop, provided there are no
						restrictions from the project and the tokens are listed on a cryptocurrency exchange.
						Always check the token&apos;s market conditions and project-specific guidelines before
						trading.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What are the risks of participating in Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">Risks include:</Text>
						<UnorderedList>
							<ListItem>
								<b>Fraud:</b> Be wary of projects using airdrops to collect personal data or mislead
								about token value.
							</ListItem>
							<ListItem>
								<b>Security Risks:</b> Interacting with malicious airdrops can lead to the loss of
								funds.
							</ListItem>
							<ListItem>
								<b>Regulatory Risks: </b> Participating in airdrops may expose you to regulatory
								scrutiny, depending on your jurisdiction.
							</ListItem>
							<ListItem>
								<b>Tax Implications:</b> Tokens received from airdrops may be taxable income in many
								jurisdictions.
							</ListItem>
						</UnorderedList>
						<Text mb="20px">
							By addressing these specific questions, we aim to equip the SpellDrop community with
							the necessary information to navigate and maximize their benefits from Cosmos airdrops
							safely and effectively.
						</Text>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How are crypto airdrops taxed?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						In many jurisdictions, tokens received from airdrops, including those from the Cosmos
						network, are considered taxable income. The value of the tokens at the time they are
						airdropped is generally the amount you need to report as income. It&apos;s advisable to
						consult with a tax professional in your country to understand specific obligations and
						ensure compliance.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What steps should I take after receiving a Cosmos airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">After receiving a Cosmos airdrop, you should:</Text>
						<UnorderedList>
							<ListItem>
								<b>Verify the Tokens:</b> Check your wallet to ensure the tokens have been received.
							</ListItem>
							<ListItem>
								<b>Research the Token:</b> Understand the utility and potential uses of the token
								within the Cosmos ecosystem.
							</ListItem>
							<ListItem>
								<b>Monitor Developments: </b> Stay updated with any news or updates from the
								project.
							</ListItem>
							<ListItem>
								<b>Decide on Your Strategy:</b> Depending on your research, decide whether to hold,
								sell, or use the tokens for further participation in the ecosystem.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								How to claim tokens from a Cosmos airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">To claim tokens from a Cosmos airdrop:</Text>
						<UnorderedList>
							<ListItem>
								<b>Link Your Wallet:</b> Ensure your wallet is compatible and linked to the platform
								distributing the airdrop.
							</ListItem>
							<ListItem>
								<b>Follow Project Instructions:</b> Some airdrops may require you to claim the
								tokens through specific actions on the project’s website or an interface.
							</ListItem>
							<ListItem>
								<b>Receive Tokens: </b>Once claimed, the tokens will be distributed to your wallet
								according to the project&apos;s timeline.
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Do I need a special wallet for Cosmos airdrops?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						For Cosmos airdrops, you need a wallet that supports the Cosmos Network&apos;s token
						standards. Ensure that your wallet can receive and manage the specific tokens being
						airdropped.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								Can a Cosmos airdrop affect the price of a cryptocurrency?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						Yes, airdrops can influence the price of a cryptocurrency by increasing supply and
						awareness.
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem bg="navy.900" borderRadius="30px" p="15px" mb="22px" border="none">
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left" fontWeight="700">
								What are the best practices for securely participating in a Cosmos airdrop?
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel pb={4} color="grey.100">
						<Text mb="20px">
							To securely participate in a Cosmos airdrop, follow these best practices:
						</Text>
						<UnorderedList>
							<ListItem>
								<b>Use a Dedicated Wallett:</b> Use a separate wallet for airdrops to protect your
								main holdings.
							</ListItem>
							<ListItem>
								<b>Never Share Private Keys:</b> Never divulge your private keys or seed phrases.
							</ListItem>
							<ListItem>
								<b>Verify Airdrop Details: </b>Always double-check the authenticity of the airdrop
								through official Cosmos channels or reputable airdrop platforms like SpellDrop.
							</ListItem>
							<ListItem>
								<b>Be Cautious with Tasks: </b>Be wary of airdrops that require extensive personal
								information or deposits.
							</ListItem>
						</UnorderedList>

						<Text mb="20px">
							By thoroughly answering each question, we aim to provide a comprehensive resource for
							SpellDrop users to navigate and leverage the opportunities offered by Cosmos airdrops
							effectively and securely.
						</Text>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Flex>
	)
}
