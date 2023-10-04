import './MostPopular.css'
import { Card, PrimaryButton, SectionHeader, SectionWrapper } from '../../components/index'
import mostPopularData from '../../Data/MostPopularData'
const MostPopular = () =>{

    

    const cards = mostPopularData.map(card =>{
        return(
            <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
        )
    })

return(
   <>
    <SectionWrapper>
    <SectionHeader>
        Most popular
    </SectionHeader>
    <div className='most-popular-items'>
        {cards}
    </div>
    <div className='most-popular-btn'>
            <PrimaryButton dir={"/browse"}>
                Discover Popular
            </PrimaryButton>
       </div>
    </SectionWrapper>
   </>
)
}


export default MostPopular