import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useFormat from '../hooks/useFormat'
import { Format } from '../hooks/useBooks'

interface Props{
  onSelectFormat : (format:Format|null) => void;
  selectedFormat : Format | null;
}

const FormatSelecror = ({onSelectFormat,selectedFormat}:Props) => {
    const {data,error} = useFormat()

    if (error) return null;
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        {selectedFormat?.name || "Format"}
        </MenuButton>
        <MenuList>
            {data.map(format=><MenuItem onClick={()=>onSelectFormat(format)} key={format.id}>{format.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default FormatSelecror
