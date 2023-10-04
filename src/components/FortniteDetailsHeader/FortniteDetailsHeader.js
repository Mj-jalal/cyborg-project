import './FortniteDetailsHeader.css'


const FortniteDetailsHeader =(props)=>{
    return(
        <div className='fortnite-details-header'>
            <h4>
                {props.children}
            </h4>
        </div>
    )
}

export default FortniteDetailsHeader