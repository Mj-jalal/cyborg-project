import PrimaryButton from '../Buttons/Buttons';
import './TopStreamersCard.css'

import { FaCheck } from "react-icons/fa6";
const TopStreamersCard=(props)=>{
    return(
        <div className='d-flex justify-content-between align-items-center flex-wrap top-treamer-container'>
            <div className='d-flex align-items-center top-streamer-left-content'>
                <p className='top-streamer-classement'>{props.classement}</p>
                <img className='top-streamer-avatar' src={props.avatar}/>
                <p className='top-streamer-name'><span><FaCheck/></span>{props.name}</p>
            </div>
            <div className='top-stramer-right-content'>
                <PrimaryButton>
                    Follow
                </PrimaryButton>
            </div>
        </div>
    )
}

export default TopStreamersCard