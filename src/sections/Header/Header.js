import "./Header.css"
import logo from "../../assets/images/logo.png"
import {NaveItem} from "../../components/index"
import { Link } from "react-router-dom"
import profile_header from '../../assets/images/profile-header.jpg'
const Header = () =>{
    return(
        <div>
            <nav className="navbar navbar-expand-sm navbar-light" id="neubar">
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={logo} height="50" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <NaveItem>
              <Link className="nav-link mx-2 active" aria-current="page" to="/">Home</Link>
            </NaveItem>
            <NaveItem>
              <Link className="nav-link mx-2" to="/browse">Browser</Link>
            </NaveItem>
           <NaveItem>
              <Link className="nav-link mx-2" to="/details">Details</Link>
           </NaveItem>
           <NaveItem>
            <Link className="nav-link mx-2" to="streams">Streams</Link>
           </NaveItem>
           <NaveItem>
            <Link className="nav-link mx-2 profile_header" to="/profile">profile<img className="profile_header_img" src={profile_header} alt=""/></Link>
           </NaveItem>
          </ul>
        </div>
        </div>
        </nav>
        </div>
    )
}

export default Header