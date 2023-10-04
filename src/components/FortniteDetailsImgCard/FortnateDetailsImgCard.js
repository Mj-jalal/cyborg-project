import { SecondaryButtonFortnite } from '../Buttons/Buttons'
import './FortniteDetailsImgCard.css'

const FortniteDetailsImgCard=(props)=>{
    return(
       <div>
            <div className='frotnite-details-img'>
                <img src={props.image_1} alt=''/>
                <img src={props.image_2} alt=''/>
                <img src={props.image_3} alt=''/>
            </div>
            <div className='frortnite-details-text'>
              <p>{props.content}</p>
            </div>
            <div className='fortnite-details-btn'>
                <SecondaryButtonFortnite>
                    Download Fortnite now!
                </SecondaryButtonFortnite>
            </div>
       </div>
    )
}

export default FortniteDetailsImgCard