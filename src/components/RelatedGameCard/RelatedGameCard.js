import './RelatedGameCard.css'
import{FaStar, FaDownload} from 'react-icons/fa6'
const RelatedGameCard =(props)=>{
    return(
        <div className='row'>
            <div className='col-lg-6'>
            <div className=' d-flex justify-content-between align-items-center related-g-container'>
            <div className='d-flex justify-content-center align-items-center related-g'>
                    <img className='related-game-image' src={props.image} alt=''/>
                    <h4 className='related-game-title'>
                    {props.title} <br/>
                        <span className='relaterd-game-catygory'>{props.category}</span>
                    </h4>
                </div>
                <ul>
                    <li><span style={{"color":"var(--color-icons)"}}><FaStar/></span> <span>{props.rate}</span></li>
                    <li><span style={{"color":"var(--color-primary)"}}><FaDownload/></span> <span>{props.download}M</span></li>
                </ul>
            </div>
            </div>
            <div className='col-lg-6 '>

            <div className='d-flex justify-content-between align-items-center related-g-container'>
            <div className='d-flex justify-content-center align-items-center related-g'>
                    <img className='related-game-image' src={props.image} alt=''/>
                    <h4 className='related-game-title'>
                    {props.title} <br/>
                        <span className='relaterd-game-catygory'>{props.category}</span>
                    </h4>
                </div>
                <ul>
                    <li><span style={{"color":"var(--color-icons)"}}><FaStar/></span> <span>{props.rate}</span></li>
                    <li><span style={{"color":"var(--color-primary)"}}><FaDownload/></span> <span>{props.download}M</span></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default RelatedGameCard