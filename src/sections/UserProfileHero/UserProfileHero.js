import { PrimaryButton, SecondaryButton } from '../../components'
import './UserProfileHero.css'

const UserProfileHero=(props)=>{
    return(
        <div className='row'>
            <div className='col-lg-4'>
                <img className='col-12 user-profile-hero-image' src={props.image} alt=''/>
            </div>
            <div className='col-lg-4 user_profile_left_info'>
                <PrimaryButton>
                    Offline
                </PrimaryButton>
                <h4>{props.name}</h4>
                <p>{props.text}</p>
                <SecondaryButton>
                    strat live stream
                </SecondaryButton>
            </div>
            <div className='col-lg-4 my-auto'>
                <ul className=' user-profile-right-info'>
                    <li className='d-flex justify-content-between'><p>Games Downloaded</p> {props.game_download}</li>
                    <li className='d-flex justify-content-between'><p>Friends Online</p>{props.frends_online}</li>
                    <li className='d-flex justify-content-between'><p>Live Streams</p>{props.live_streams}</li>
                    <li className='d-flex justify-content-between'><p>Clips</p>{props.clips}</li> 
                </ul>
            </div>
        </div>
    )
}

export default UserProfileHero