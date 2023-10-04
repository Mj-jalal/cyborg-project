import './Featured.css'
import { SectionWrapper, SectionHeader, FeaturedGameCard } from '../../components'
import FeaturedGameData from '../../Data/FeaturedGameData'

const Featured=()=>{

    const FeaturedGame = FeaturedGameData.map(card => {
      return  <FeaturedGameCard key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>
    })
    return(
        <>
            <SectionWrapper>
                <SectionHeader>
                    Featured Game
                </SectionHeader>
                <div className='featured-game-cards'>
                   {FeaturedGame}
                </div>
            </SectionWrapper>
        </>
    )
}

export default Featured