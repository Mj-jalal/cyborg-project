import './RelatedGame.css'
import { RelatedGameCard, SectionHeader, SectionWrapper } from '../../components'
import GamingLibraryData from '../../Data/GamingLibraryData'

const RelatedGame=()=>{

    const RelatedGame = GamingLibraryData.map(card=>{
        return <RelatedGameCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.d}/>
    })

    return(
        <>
            <SectionWrapper>
            <SectionHeader>
                Other Related Game
            </SectionHeader>
            <div className='related-game-container'>
                {RelatedGame}
            </div>
            </SectionWrapper>
        </>
    )
}

export default RelatedGame