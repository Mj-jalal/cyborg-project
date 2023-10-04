import { SectionHeader, SectionWrapper,FeaturedGameCard } from '../../components'
import FeaturedGameData from '../../Data/FeaturedGameData'
import './LiveStreams.css'


const LiveStrams =()=>{
    const LiveStrams = FeaturedGameData.map(card => {
        return  <FeaturedGameCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
      })
    return(
       <>
       <SectionWrapper>
        <SectionHeader>
            Live Streams
        </SectionHeader>
        <div className='live-stream-card'>
            {LiveStrams}
        </div>
       </SectionWrapper>
       </>
    )
}

export default LiveStrams