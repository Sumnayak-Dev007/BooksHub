import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { Game } from '../hooks/useGame';
import { Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react';
import PlatformIconsList from './PlatformIconsList';
import CriticScore from './CriticScore';


interface Props {
    game: Game;
}
const GameCard = ( {game} : Props ) => {
    

  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2xl'>{game.name}</Heading>
            <HStack justifyContent='space-between'>
            <PlatformIconsList platforms={game.parent_platforms.map(p=>p.platform)}/>
            <CriticScore score={game.metacritic }/>
            </HStack>
            
        </CardBody>
    </Card>
  )
}

export default GameCard
