import React from "react"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="main-header">
                <h1>Clean Blog</h1>
                <p>A Blog Theme by Start Bootstrap</p>
            </div>
        </header>
    )
}

export default Header
