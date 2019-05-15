import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

class LandingPage extends React.Component {
    render() {
        return <div className="landing">
            <div className="slider">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="overlay">
                <div className="brand">
                    <h1 className="title">TAURUNUM ANGELS</h1>
                    <div className="links">
                        <Link to="/home">
                            <button>Kennel</button>
                        </Link>
                        <Link to="/about">
                            <button>Info</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default LandingPage