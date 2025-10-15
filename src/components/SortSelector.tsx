import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

import { BsChevronDown } from 'react-icons/bs'
interface Props{
    onSelectSort : (sortOrder:string) =>void;
    sortOrder: string;
}

const SortSelector = ({onSelectSort,sortOrder}:Props) => {
    const sortOrders = [
        { value: '', label: 'Date added' },
        { value: '-updated', label: 'Date updated' },
        { value: 'title', label: 'Name' },
        { value: '-released', label: 'Release date' },
        {value: '-ratings_count', label: 'Average rating' },
        ]

    const currSortOrder = sortOrders.find(order =>order.value === sortOrder)
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
          Order by: {currSortOrder?.label || "Name"}
          </MenuButton>
          <MenuList>
          {sortOrders.map((order) => (
            <MenuItem key={order.label} onClick={()=>onSelectSort(order.value)}> 
            {order. label}
            </MenuItem>))}
         </MenuList>
      </Menu>
    )
}

export default SortSelector
