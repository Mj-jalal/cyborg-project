import './HowStartStream.css'
import { SectionHeader, PrimaryButton, HowStartStreamCard } from '../../components/index'
import HowStartStreamData from '../../Data/HowStartStreamData'

const HowStartStream=()=>{
    const StreamCard = HowStartStreamData.map(card=>{
        return <HowStartStreamCard key={card.id} image={card.image} title={card.title} content={card.content} />
    })

    return(
        <div className='how-start-stream-container'>
            <SectionHeader>
                How To Start Your Live Straam
            </SectionHeader>
           <div className='how-start-stream-cards'>
                {StreamCard}
           </div>
            <PrimaryButton dir={"/profile"}>
                Go To Profile
            </PrimaryButton>
        </div>
    )
}

export default HowStartStream