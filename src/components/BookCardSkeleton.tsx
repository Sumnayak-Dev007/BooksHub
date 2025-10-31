import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const BookCardSkeleton = () => {
  return (
    <Card width="300px" borderRadius={10} overflow='hidden' paddingX='10px' paddingTop={2}>
        <Skeleton height="320px"/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default BookCardSkeleton
