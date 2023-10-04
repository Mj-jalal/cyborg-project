import './FeaturedGameCard.css'
import{FaStar, FaDownload} from 'react-icons/fa6'
const FeaturedGameCard=(props)=>{
    return(
        <div className='Featured-game-item'>
            <img className='featured-game-item-image' src={props.image} alt=''/>
            <div className='Featured-game-item-content'>
            <h4 className='Featured-game-item-title'>
                       {props.title} <br/>
                        <span className='featured-game-category'>{props.category}</span>
            </h4>
                    <ul>
                        <li><span style={{"color":"var(--color-icons)"}}><FaStar/> </span><span>{props.rate}</span></li>
                        <li><span style={{"color":"var(--color-primary)"}}><FaDownload/> </span><span>{props.download}M</span></li>
                    </ul>
            </div>
        </div>
    )
}

export default FeaturedGameCard