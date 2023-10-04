import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./App.css";
// old way
// import Header from "./components/Header/Header"
// import Container from "./components/Container/Container"
// import Footer from "./components/Footer/Footer"

import { Header,Footer} from "./sections/index" 
import {Home,Profile,Browse, Details, Streams} from './Pages/index'
import { Container} from "./components/index" 


const App =()=>{
    return(
        <>
      <Router>
        <Header />
        <Container>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/browse" element={<Browse/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/streams" element={<Streams/>}/>
           </Routes>
        </ Container>
        <Footer />
      </Router>
        </>
    )
}

export default App