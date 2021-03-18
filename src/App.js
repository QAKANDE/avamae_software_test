import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs'
import ContactUs from './Components/ContactUs/ContactUs'

function App() {
    return ( <
        div className = "App" >
        <
        Router >
        <
        Navbar / >
        <
        Route path = "/"
        exact component = { Home }
        />{' '} <
        Route path = "/about-us"
        exact component = { AboutUs }
        />{' '} <
        Route path = "/contact-us"
        exact component = { ContactUs }
        /> < /
        Router > <
        /div>
    )
}

export default App