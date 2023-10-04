import UserProfileData from '../../Data/UserProfileData'
import { SectionWrapper } from '../../components'
import MostPopularClips from '../MostPopularClips/MostPopularClips'
import UserProfileHero from '../UserProfileHero/UserProfileHero'
import './UserProfile.css'

const UserProfile=()=>{
    const userProfileHero = UserProfileData.map(card=>{
        return <UserProfileHero key={"1"} image={card.image} name={card.name} text={card.text}  game_download={card.game_download} frends_online={card.frends_online} live_streams={card.live_streams} clips={card.clips} />
    })
    return(
        <SectionWrapper>
            {userProfileHero}
            <MostPopularClips/>
        </SectionWrapper>
    )
}

export default UserProfile