import React, {useState} from "react"
import menu from './images/menu.png'

const Navbar = () => {
    const [dropdownDisplay, setDisplay] = useState(false)
    return (
        <nav>
            <span id="start-bootstrap">Start Bootstrap</span>
            <div className="dropdown">
                <button id="menu-button" onClick={() => setDisplay(display => !display)} >
                    <span id="menubtn-text">MENU</span>
                    <img className="menu-icon" src={menu} alt="" />
                </button>
                {dropdownDisplay &&
                <div className="dropdown-content">
                    <span className="navLink">HOME</span>
                    <span className="navLink">ABOUT</span>
                    <span className="navLink">SAMPLE POST</span>
                    <span className="navLink">CONTACT</span>
                </div> 
                }
            </div>
            <div className="full-menu">
                <span className="navLink">HOME</span>
                <span className="navLink">ABOUT</span>
                <span className="navLink">SAMPLE POST</span>
                <span className="navLink">CONTACT</span>
            </div>
        </nav>
    )
}

export default Navbar