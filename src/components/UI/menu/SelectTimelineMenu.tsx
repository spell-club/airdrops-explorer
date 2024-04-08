import React, { useState } from 'react'
import {
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import { MdOutlineCalendarToday } from 'react-icons/md'

interface MenuItem {
  label: string
  value: number
}

interface Props {
  items: MenuItem[]
  onItemSelected: (value: MenuItem) => void
  selected: MenuItem
}

const SelectTimelineMenu = ({ items, onItemSelected, selected }: Props) => {
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100')
  const textColorSecondary = useColorModeValue('secondaryGray.600', 'white')
  const bgList = useColorModeValue('white', 'whiteAlpha.100')
  const bgShadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset',
  )
  const textColor = useColorModeValue('secondaryGray.500', 'white')
  const textHover = useColorModeValue(
    { color: 'secondaryGray.900', bg: 'unset' },
    { color: 'secondaryGray.500', bg: 'unset' },
  )

  const [selectedItem, setSelectedItem] = useState(selected)

  return (
    <Menu matchWidth>
      <MenuButton
        as={Button}
        bg={boxBg}
        fontSize='sm'
        fontWeight='500'
        color={textColorSecondary}
        borderRadius='7px'
      >
        <Flex align='center'>
          <Icon
            as={MdOutlineCalendarToday}
            color={textColorSecondary}
            me='4px'
          />
          {selectedItem.label}
        </Flex>
      </MenuButton>

      <MenuList
        w='125px'
        minW='unset'
        maxW='125px !important'
        backdropFilter='blur(63px)'
        bg={bgList}
        boxShadow={bgShadow}
      >
        {items.map((item) => {
          if (selectedItem.value !== item.value) {
            return (
              <MenuItem
                key={item.label}
                bg='none'
                transition='0.2s linear'
                color={textColor}
                p='0px'
                borderRadius='8px'
                display='flex'
                justifyContent='center'
                onClick={() => {
                  setSelectedItem(item)
                  onItemSelected(item)
                }}
                _hover={textHover}
                _active={{
                  bg: 'transparent',
                }}
                _focus={{
                  bg: 'transparent',
                }}
              >
                {item.label}
              </MenuItem>
            )
          }
        })}
      </MenuList>
    </Menu>
  )
}

export default SelectTimelineMenu
