// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
// Custom components
import Card from '../card/Card'
import Information from '../../views/admin/profile/components/Information'

// Assets
export default function GeneralInformation(props: { [x: string]: any }) {
  const { ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')
  const textColorSecondary = 'gray.400'
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  )
  return (
    <Card {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'
      >
        Description
      </Text>
      <Text color={textColorSecondary} fontSize='16' me='26px' w={650}>
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all... As we live, our hearts turn colder. Cause pain is what we go
        through as we become older. We get insulted by others, lose trust for
        those others. We get back stabbed by friends. It becomes harder for us
        to give others a hand. We get our heart broken by people we love, even
        that we give them all...
      </Text>
    </Card>
  )
}
