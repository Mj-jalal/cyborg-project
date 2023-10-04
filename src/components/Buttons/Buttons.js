import { Link } from 'react-router-dom'
import './Buttons.css'
const PrimaryButton=(props)=>{
    return(
        <div className='button primary-btn'>
            <Link to={props.dir}>{props.children}</Link>
        </div>
    )
}
const SecondaryButton=(props)=>{
    return(
        <div className='button secandary-btn'>
            <a href='/#'>{props.children}</a>
        </div>
    )
}
const TirdaryBottun = (props)=>{
    return(
        <div className='button top-download-view-game-btn'>
            <a href='/#'>{props.children}</a>
        </div>
    )
}
const SecondaryButtonFortnite=(props)=>{
    return(
        <div className='button secandary-btn-fortnite col-lg-12'>
            <a href='/#'>{props.children}</a>
        </div>
    )
}
export default PrimaryButton
export {SecondaryButton, TirdaryBottun, SecondaryButtonFortnite}