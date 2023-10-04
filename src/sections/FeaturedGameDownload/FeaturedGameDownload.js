import './FeaturedGameDownload.css'
import Featured from '../Featured/Featured'
import TopDownload from '../TopDownload/TopDownload'



const FeaturedGameDownload=()=>{
    return(
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
                <Featured/>
            </div>
            <div className='col-lg-4'>
                <TopDownload/>
            </div>
          </div>
        </div>
    )
}
export default FeaturedGameDownload

