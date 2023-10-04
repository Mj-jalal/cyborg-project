import './PopularStreamLive.css'
import { PopularStreamLiveCard, PrimaryButton, SectionHeader, SectionWrapper } from '../../components/index'
import PopularStreamLiveData from '../../Data/PopularStreamLiveData'

const PopularStreamLive=()=>{
    const PopularStreamCard = PopularStreamLiveData.map(card=>{
        return <PopularStreamLiveCard key={card.id} image={card.image} avatarImage={card.imageAvatar} name={card.name} title={card.title} live={card.live} view={card.view} game={card.game} />
    })

    return(
       <>
       <SectionWrapper>
        <SectionHeader>
             Most Popular Live Stream
        </SectionHeader>
        <div className='popular-stream-live-cards'>
            {PopularStreamCard}
        </div>
       <div className='popular-stream-live-btn'>
            <PrimaryButton dir={"/streams"}>
                Discover All Streams
            </PrimaryButton>
       </div>
       </SectionWrapper>
       </>
    )
}


export default PopularStreamLive