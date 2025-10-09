import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useFormat from '../hooks/useFormat'

const FormatSelecror = () => {
    const {data,error} = useFormat()

    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Formats</MenuButton>
        <MenuList>
            {data.map(format=><MenuItem key={format.id}>{format.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default FormatSelecror
