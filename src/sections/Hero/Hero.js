import "./Hero.css"
import { PrimaryButton } from "../../components/index"

const Hero =()=>{
    return(
        <div className="hero-main">
            <div className="hero-text">
                <h6 className="hero-subtitle">welcome to cybrog</h6>
                <h4 className="hero-title"><em>Browse</em> our Popular Games Here</h4>
                <PrimaryButton dir={"/browse"}>
                Browse Now
                </PrimaryButton>
                {/* <div className="main-button">
                    <a href="browse.html">Browse Now</a>
                </div> */}
            </div>
        </div>
    )
}
export default Hero