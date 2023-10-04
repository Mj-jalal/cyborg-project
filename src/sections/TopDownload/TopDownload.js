import './TopDownload.css'
import { SectionWrapper, SectionHeader, TopDownloadCard} from '../../components'
import GamingLibraryData from '../../Data/GamingLibraryData'
import { TirdaryBottun } from '../../components/Buttons/Buttons'
const TopDownload= ()=>{
    const TopDownload = GamingLibraryData.map(card=>{
        return <TopDownloadCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.d}/>
    })
    return(
       <>
       <SectionWrapper>
        <SectionHeader>
            Top download
        </SectionHeader>
        <div className='top-download-game-cards'>
            {TopDownload}
        </div>
            <div className='view-all-btn'>
            <TirdaryBottun>
                View All Game
            </TirdaryBottun>
            </div>
       </SectionWrapper>
       </>
    )
}

export default TopDownload