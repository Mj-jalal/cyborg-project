import TopStreamersData from '../../Data/TopSreamersData'
import { SectionHeader, SectionWrapper, TopStreamersCard } from '../../components'
import './TopStreamers.css'


const TopStreamers =()=>{
    const TopStreamersC = TopStreamersData.map(card=>{
        return <TopStreamersCard key={card.id} classement={card.classement} name={card.name} avatar={card.avatar}/>
    })
    return(
        <>
        <SectionWrapper>
            <SectionHeader>
                Top Streamers
            </SectionHeader>
            <div className='top-streamers-live'>
                {TopStreamersC}
            </div>
        </SectionWrapper>
        </>
    )
}

export default TopStreamers