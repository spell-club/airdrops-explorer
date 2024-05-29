import { Flex, Text, Heading, SimpleGrid, Box } from '@chakra-ui/react'

export default function CalculatorText() {
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
				Cosmos Airdrop and Staking Calculator 
			</Heading>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Optimize Your Cosmos Ecosystem Investments
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Whether you&apos;re just diving into the world of Cosmos or you&apos;re an experienced
				player in the ecosystem, the SpellDrop ROI Calculator is your key to unlocking the full
				potential of your investments. This intuitive tool simplifies how you track and project the
				returns from your ATOM staking efforts and your participation in diverse airdrops, making
				the once complex calculations straightforward and accessible.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why the SpellDrop Cosmos Airdrop Calculator?
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				The SpellDrop ROI Calculator is your essential tool for a clearer financial picture in the
				Cosmos ecosystem. It simplifies the complexities of cryptocurrency returns, offering you a
				crystal-clear insight into how your investments are performing. This tool combines
				functionalities of a Cosmos staking calculator and a Cosmos airdrops calculator, making it
				your one-stop solution for financial clarity.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Powerful Features of Our Calculator
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb={{ base: '20px', md: '40px' }}>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Detailed Earnings Breakdown
					</Text>
					<Text>
						After inputting your initial staking details, the calculator will display your total
						gains, ROI percentage, and a detailed list of earnings from specific airdrops and
						staking rewards. This feature allows you to see not just how much you’ve earned, but
						exactly where those earnings came from.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Customizable Inputs
					</Text>
					<Text>
						Tailor the calculator inputs with your specific staking details to reflect accurate and
						personalized results. Input your initial staking amount, the validator fee, and your
						staking start date to see an estimate of your accumulated rewards.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Visual Representation of Gains
					</Text>
					<Text>
						The calculator not only calculates your total gains but also visually represents these
						earnings over time, making it easier to track and analyze your investment growth.
					</Text>
				</Flex>
			</SimpleGrid>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Why the SpellDrop Cosmos Airdrop Calculator?
			</Heading>

			<Box as="ol" listStyleType="none" padding="0">
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text mb="20px" fontWeight="bold">
						1. Input Your Staking Details
					</Text>
					<Text>
						Start by entering the total amount of ATOM you’ve staked, the percentage fee of your
						validator, and the date you began your staking journey.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text mb="20px" fontWeight="bold">
						2. Calculate Your Potential Earnings
					</Text>
					<Text>
						Click ‘Calculate’ to view a comprehensive breakdown of your investments&apos;
						performance, including staking rewards and individual airdrops.
					</Text>
				</Flex>
				<Flex as="li" bg="navy.900" flexDir="column" py="30" px="50" borderRadius="30px" mb="17px">
					<Text mb="20px" fontWeight="bold">
						3. Strategize Your Investments
					</Text>
					<Text>
						Use the detailed outputs to plan your future investments. The ROI Calculator helps you
						understand the impact of different staking strategies and airdrop participation on your
						overall portfolio.
					</Text>
				</Flex>
			</Box>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Benefits of Using Our Cosmos Airdrop Calculator
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 3 }} gap="20px" mb={{ base: '20px', md: '40px' }}>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Strategic Planning
					</Text>
					<Text>
						Gain insights that help you refine your investment strategies for future staking and
						airdrop opportunities.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						Informed Decision-Making
					</Text>
					<Text>
						Make more informed decisions with a better understanding of potential earnings and past
						investment performance.
					</Text>
				</Flex>
				<Flex bg="navy.900" flexDir="column" align="center" py="30" px="50" borderRadius="30px">
					<Text mb="36px" fontWeight="bold">
						User-Friendly Experience
					</Text>
					<Text>
						Enjoy a straightforward and intuitive interface that makes it easy for anyone to
						navigate and use.
					</Text>
				</Flex>
			</SimpleGrid>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Enhance Your Investment Strategy Today
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Take control of your Cosmos investments by leveraging the detailed insights provided by the
				SpellDrop ROI Calculator. Whether planning future investments or assessing past gains, our
				calculator equips you with the tools to make informed decisions.
			</Text>

			<Heading as="h2" fontWeight="bold" fontSize="lg" mb={{ base: '20px', md: '36px' }}>
				Join Us at SpellDrop
			</Heading>

			<Text fontSize="md" fontWeight="500" mb={{ base: '20px', md: '40px' }} lineHeight="28px">
				Join our community at SpellDrop, where every calculation and every click brings you closer
				to the Cosmos airdrops ecosystem. With our tools, insights, and support, navigate the
				exciting opportunities with ease.
			</Text>
		</Flex>
	)
}
