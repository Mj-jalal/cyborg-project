import './DetailsFeatureBanner.css'
import featureLeft from '../../assets/images/feature-left.jpg'
import featureright from '../../assets/images/feature-right.jpg'
import { FaCirclePlay } from "react-icons/fa6";
const DetailsFeatureBanner =()=>{
    return(
        // <div className='row'>
            <div className='d-flex justify-content-center flex-wrap'>
                {/* <div className='row'> */}
                    <div className='col-lg-4 details-feature-left-container'>
                         <img className='details-feature-left-img' src={featureLeft} alt=''/>
                    </div>
                    <div className='col-lg-8 details-feature-right-container'>
                        <img className='details-feature-right-img' src={featureright} alt=''/>
                        <div className='details-feature-play'>
                            <a href='https://www.youtube.com/watch?v=VaCdjT-yNkE' target='_blank'><FaCirclePlay/></a>
                        </div>
                    </div>
                {/* </div> */}
                </div>
        // </div>
    )
}
export default DetailsFeatureBanner