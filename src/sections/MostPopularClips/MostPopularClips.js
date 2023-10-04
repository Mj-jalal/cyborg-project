import MostPopularClipsData from '../../Data/MostPopularClipsData'
import { MostPopularClipsCard, PrimaryButton, SectionHeader } from '../../components'
import './MostPopularClips.css'


const MostPopularClips=()=>{

    const MostPopularClips_card = MostPopularClipsData.map(card=>{
        return <MostPopularClipsCard key={card.id} image={card.Image} name={card.name} views={card.views}/>
    })

    return(
        <div className='most-popular-clips-container'>
            <SectionHeader>
                 Your Most Popular Clips
            </SectionHeader>
            <div className='most-popular-clips-card'>
                {MostPopularClips_card}
            </div>
            <div className='most-popular-clips-btn'>
                <PrimaryButton>
                    Load More Clips
                </PrimaryButton>
            </div>
        </div>
    )
}
export default MostPopularClips