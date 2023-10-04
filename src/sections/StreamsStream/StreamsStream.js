import LiveStrams from '../LiveSreams/LiveStreams'
import TopStreamers from '../TopStreamers/TopStreamers'
import './StreamsStream.css'


const StreamsStream=()=>{
    return(
        <div className='container'>
           <div className='row'>
                <div className='col-lg-8'>
                    <LiveStrams/>
                </div>
                <div className='col-lg-4'>
                    <TopStreamers/>
                </div>
           </div>
        </div>
    )
}

export default StreamsStream