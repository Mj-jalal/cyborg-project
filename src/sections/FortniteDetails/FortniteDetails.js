import FortniteDetailsData from '../../Data/FortniteDetailsData'
import { FortniteDetailsHeader, SectionWrapper, FortniteDetailCard, FortniteDetailsImgCard } from '../../components'
// import FortniteDetailCard from '../../components/FortniteDetailsCard/FortniteDetailCard'
import './FortniteDetails.css'


const FortniteDetails = ()=>{
    const FortniteDetail = FortniteDetailsData.map(card=>{
        return(
            <FortniteDetailCard key={card.id} title={card.title} category={card.category} rate={card.rate} download={card.download} storage={card.storage} type={card.type}/>
        )
    })
    const FortniteDetailImg = FortniteDetailsData.map(card=>{
        return (
            <FortniteDetailsImgCard key={card.id} image_1={card.image_1} image_2={card.image_2} image_3={card.image_3} content={card.text} />
        )
    })
    return(
        <div className='fortnite-details'>
            <FortniteDetailsHeader>
                 FORTNITE DETAILS
            </FortniteDetailsHeader>
            <SectionWrapper>
                {FortniteDetail}
                {FortniteDetailImg}
            </SectionWrapper>
        </div>
    )
}

export default FortniteDetails 