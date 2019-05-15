import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const Header = () => {

    const handleClick = () => {
        document.getElementById('toggler').checked = false;
    }

    return (
        <header>
            <nav>
                <span>Taurunum Angels</span>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" id="toggler" />
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li onClick={handleClick}><Link to="/home">
                                        HOME
                                    </Link></li>
                                    <li onClick={handleClick}><Link to="/dogs">
                                        DOGS
                                    </Link></li>
                                    <li onClick={handleClick}><Link to="/judging">
                                        JUDGING
                                    </Link></li>
                                    <li onClick={handleClick}><Link to="/about">
                                        ABOUT
                                    </Link></li>
                                    <li onClick={handleClick}><Link to="/contact">
                                        CONTACT
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header