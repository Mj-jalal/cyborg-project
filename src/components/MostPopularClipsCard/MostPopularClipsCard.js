import './MostPopularClipsCard.css'
import { FaEye, FaPlay} from "react-icons/fa6";
const MostPopularClipsCard=(props)=>{
    return(
        <div className='most-popular-clips-card-container'>
           <div className='most-popular-clips-card-img-container'>
            <img className='most-popular-clips-card-img' src={props.image} alt=''/>
            <a href='https://www.youtube.com/watch?v=r1b03uKWk_M' target='_blank'><FaPlay/></a>
           </div>
           <div className='most-popular-clips-card-info'>
            <h4>{props.name}</h4>
            <span><FaEye/> {props.views}</span>
           </div>
        </div>
    )
}

export default MostPopularClipsCard