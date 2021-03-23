import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Desktop/Navbar";
import Footer from "./Components/Desktop/Footer";
import Home from "./Components/Desktop/Home/Home";
import AboutUs from "./Components/Desktop/AboutUs/AboutUs";
import ContactUs from "./Components/Desktop/ContactUs/ContactUs";
import MobileNavbar from "./Components/MobileView/MobileNavbar";
import MobileHome from "./Components/MobileView/MobileHome";
import MobileContactForm from "./Components/MobileView/MobileContactForm";
import MobileFooter from "./Components/MobileView/MobileFooter";

function App() {
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [test, setTest] = useState("");
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);
    return ( <
        div className = "App" > { " " } {
            windowWidth <= 1024 ? ( <
                div > { " " } <
                Router >
                <
                MobileNavbar / >
                <
                Route path = "/"
                exact component = { MobileHome }
                />{" "} <
                Route path = "/mobile-contact-us"
                exact component = { MobileContactForm }
                />{" "} <
                MobileFooter / > { " " } <
                /Router>{" "} <
                /div>
            ) : ( <
                div >
                <
                Router >
                <
                Navbar / >
                <
                Route path = "/"
                exact component = { Home }
                />{" "} <
                Route path = "/about-us"
                exact component = { AboutUs }
                />{" "} <
                Route path = "/contact-us"
                exact component = { ContactUs }
                /> <Footer / >
                <
                /Router>{" "} <
                /div>
            )
        } { " " } <
        /div>
    );
}

export default App;