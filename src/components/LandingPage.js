import React from 'react'
import { Link } from 'react-router-dom'
import LandingSlideshow from './sliders/LandingSlideshow';
import './Landing.css'

class LandingPage extends React.Component {

    markVisited = () => {
        sessionStorage.setItem("visited", true);
    }

    render() {
        return <div className="landing">
            <LandingSlideshow />
            <div className="overlay">
                <div className="brand">
                    <h1 className="title">TAURUNUM ANGELS</h1>
                    <div className="links">
                        <Link to="/" onClick={this.markVisited}>
                            <button>Kennel</button>
                        </Link>
                        <Link to="/about" onClick={this.markVisited}>
                            <button>Info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default LandingPage