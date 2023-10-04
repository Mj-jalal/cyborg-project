import './FortniteDetailCard.css'
import{FaStar, FaDownload,FaServer, FaGamepad} from 'react-icons/fa6'

const FortniteDetailCard =(props)=>{
    return(
        <div className='fortnite-details-info row'>
            <div className='col-lg-6'>
                <div className=' fortnite-details-left-info'>
                    <div>
                        <h4 className='left-info-title'>{props.title}</h4>
                        <span className='pt-2 left-info-category'>{props.category}</span>
                    </div>
                    <ul>
                        <li>
                            <span className='left-info-star'><FaStar/> </span>
                            {props.rate}</li>
                        <li className='pt-2'>
                            <span className='left-info-download'>
                                <FaDownload/>
                            </span>
                              {props.download}M</li>
                    </ul>
                </div>
            </div>
         <div className='col-lg-6'>
            <div className='fortnite-details-right-info'>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <span className='right-info-star'>
                            <FaStar/>
                        </span>
                        <p className='pt-2'>
                            {props.rate}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <span className='right-info-fa'>
                            <FaDownload/>
                        </span>
                        <p className='pt-2'>
                            {props.download}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <span className='right-info-fa'><FaServer/></span>
                        <p className='pt-2'>
                            {props.storage}
                        </p>
                    </div>
                    <div className='d-flex justify-content-center flex-column align-items-center'>
                        <span className='right-info-fa'>
                            <FaGamepad/>
                        </span>
                        <p className='pt-2'>
                            {props.type}
                        </p>
                    </div>
                </div>
         </div>
        </div>
    )
}

export default FortniteDetailCard