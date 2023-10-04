import "./NaveItem.css"

const NaveItem = (props)=>{
    return(
        <li className="nav-item">
            {props.children}
        </li>
    )
}



export default NaveItem