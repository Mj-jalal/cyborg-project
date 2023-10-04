import './HowStartStreamCard.css'

const HowStartStreamCard =(props)=>{
    return(
        <div className='how-start-stream-card'>
           <img className='how-start-stream-card-image' src={props.image} alt=''/>
           <h5 className='how-start-stream-card-title'>{props.title}</h5>
           <p className='how-start-stream-card-content'>{props.content}</p>
        </div>
    )
}

export default HowStartStreamCard