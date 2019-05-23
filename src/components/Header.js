import React from 'react'
import { Link } from 'react-router-dom'
import k1 from '../images/k1.jpg'
import k2 from '../images/k2.jpg'
import k4 from '../images/k4.jpg'
import k5 from '../images/k5.jpg'
import k6 from '../images/k6.jpg'
import './Menu.css'

class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            images: [k1, k2, k4, k5, k6]
        }
    }

    componentDidMount() {
        this.menuBtn = document.getElementById('toggler');

        window.addEventListener("scroll", this.handleNavBg)
        this.menuBtn.addEventListener("change", this.handleMenuBg)
        // this.menuBtn.addEventListener("touchend", () => {
        //     this.menuBtn.style.background = "none";
        // })
    }

    randomize = () => {
        const { images } = this.state
        return Math.floor(Math.random() * Math.floor(images.length))
    }

    handleNavBg = () => {
        const navbar = document.querySelector('nav');

        if (window.scrollY >= 100) {
            navbar.className = "nav-solid"
        } else {
            navbar.className = "nav-transparent"
        }
    }

    handleMenuBg = (e) => {
        const { images } = this.state
        const bgCss = document.querySelector(".menu-wrap .menu > div").style

        if (e.target.checked && window.innerWidth >= 768) {
            bgCss.backgroundImage = `url(${images[this.randomize()]})`
        } else {
            bgCss.background = "none"
        }
    }

    handleClick = () => {
        this.menuBtn.checked = false;
    }

    render() {

        return (
            <header>
                <nav>
                    <Link to="/">
                        <span>Taurunum Angels</span>
                    </Link>
                    <div className="menu-wrap">
                        <input type="checkbox" className="toggler" id="toggler" />
                        <div className="hamburger"><div></div></div>
                        <div className="menu">
                            <div>
                                <div>
                                    <ul>
                                        <li onClick={this.handleClick}><Link to="/">
                                            HOME
                                    </Link></li>
                                        <li onClick={this.handleClick}><Link to="/news">
                                            NEWS
                                    </Link></li>
                                        <li onClick={this.handleClick}><Link to="/our-dogs">
                                            DOGS
                                    </Link></li>
                                        <li onClick={this.handleClick}><Link to="/puppies">
                                            PUPPIES
                                    </Link></li>
                                        <li onClick={this.handleClick}><Link to="/gallery">
                                            GALLERY
                                    </Link></li>
                                        <li onClick={this.handleClick}><Link to="/contact">
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
}

export default Header