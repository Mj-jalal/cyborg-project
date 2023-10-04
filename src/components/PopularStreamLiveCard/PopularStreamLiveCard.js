import "./PopularStreamLiveCard.css"
import { FaGamepad,FaEye, FaCheck} from "react-icons/fa6";
const PopularStreamLiveCard=(props)=>{
    return(
        <div className="popular-stream-live-card">
            <div className="popular-stream-live-card-img-container">
                <img className="popular-stream-live-card-img" src={props.image} alt=""/>
                <div className="popular-stream-live-card-span">
                    <div className="popular-stream-live-card-span-1">
                        <span>{props.live?"Live": ''}</span>
                    </div>
                    <div className="popular-stream-live-card-span-2">
                        <span><FaEye/> {props.view}</span>
                        <span><FaGamepad/> {props.game}</span>
                    </div>
                </div>
            </div>
            <div className="popular-stream-live-card-content">
                    <img className="popular-stream-live-card-avatar" src={props.avatarImage}/>
                    <div>
                        <h6 className="live-card-content-title-1"><span><FaCheck/></span> {props.name}</h6>
                        <h4 className="live-card-content-title-2">{props.title}</h4>
                    </div>
            </div>
        </div>
    )
}

export default PopularStreamLiveCard