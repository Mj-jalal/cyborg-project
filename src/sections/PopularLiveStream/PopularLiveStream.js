import PopularStreamLiveData from "../../Data/PopularStreamLiveData"
import { PopularStreamLiveCard, SectionHeader, SectionWrapper,PrimaryButton } from "../../components"
import "./PopularLiveStream.css"


const PopularLiveStream = ()=>{
    const MostPopularLive = PopularStreamLiveData.map(card=>{
        return <PopularStreamLiveCard key={card.id} image={card.image_} avatarImage={card.imageAvatar} name={card.name} title={card.title} live={card.live} view={card.view} game={card.game}/>
    })
    return(
        <SectionWrapper>
            <SectionHeader>
                Most Popular Live Stream
            </SectionHeader>
            <div className='popular-stream-live-cards'>
                {MostPopularLive}
                {MostPopularLive}
            </div>
            <div className='popular-stream-live-btn'>
            <PrimaryButton>
                Discover All Streams
            </PrimaryButton>
       </div>
        </SectionWrapper>
    )
}

export default PopularLiveStream