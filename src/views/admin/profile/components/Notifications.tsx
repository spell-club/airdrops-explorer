// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import Card from 'components/card/Card'
// Custom components
import Switch from 'components/UI/switch'
import Menu from 'components/UI/menu/MainMenu'

export default function Notifications(props: { [x: string]: any }) {
  const { ...rest } = props
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white')

  return (
    <Card mb='20px' {...rest}>
      <Flex align='center' w='100%' justify='space-between' mb='30px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mb='4px'
        >
          Notifications
        </Text>
        <Menu />
      </Flex>
      <Switch
        isChecked={true}
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='1'
        label='Item update notifications'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='2'
        label='Item comment notifications'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='3'
        label='Buyer review notifications'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='4'
        label='Rating reminders notifications'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='5'
        label='Meetups near you notifications'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='6'
        label='Company news notifications'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='7'
        label='New launches and projects'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='8'
        label='Monthly product changes'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='9'
        label='Subscribe to newsletter'
      />
      <Switch
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='10'
        label='Email me when someone follows me'
      />
    </Card>
  )
}
