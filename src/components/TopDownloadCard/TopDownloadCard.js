import './TopDownloadCard.css'
import{FaStar, FaDownload} from 'react-icons/fa6'
const TopDownloadCard = (props)=>{
    return(
            <div className='top-dowload-game-card'>
            <img className='top-dowload-game-image' src={props.image} alt=''/>
            <div className='top-download-game-content'>
            <h4 className='top-download-game-title'>
                       {props.title} <br/>
                        <span className='top-download-catygory'>{props.category}</span>
                    </h4>
                    <ul>
                        <li><span style={{"color":"var(--color-icons)"}}><FaStar/></span> <span>{props.rate}</span></li>
                        <li><span style={{"color":"var(--color-primary)"}}><FaDownload/></span> <span>{props.download}M</span></li>
                    </ul>
            </div>
            <span className='top-download-game-download' style={{"color":"var(--color-primary)"}}><FaDownload/></span>
        </div>
    )
}

export default TopDownloadCard