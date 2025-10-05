import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const BookCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow='hidden' paddingX='10px'>
        <Skeleton height="200px"/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default BookCardSkeleton
