import React from 'react'
import { Link } from 'react-router-dom'
import HomeSlideshow from '../sliders/HomeSlideshow'
import FrontNews from '../news/FrontNews'
import './Home.css'
import Amstaff1 from '../../images/amstaff_1.jpg'
import Cavalier1 from '../../images/cavalier_1.jpg'
import AdultPaw from '../../images/adult_paw.png'
import PuppyPaw from '../../images/puppy_paw.png'

class Home extends React.Component {


    componentDidMount() {
        document.querySelector(".mainCard").classList.add("active");
        // eslint-disable-next-line no-unused-vars
        let slideInterval;

        this.sizeAdjustments();
    }

    componentWillUnmount() {
        clearInterval(this.slideInterval);
    }

    sizeAdjustments = () => {
        if (window.innerWidth <= 768) {
            this.handleNewsSlider();
            document.querySelectorAll(".news-feed .mainCard .card-content > p:nth-child(2)").forEach(elem => {
                elem.style.width = `${0.92 * window.innerWidth}px`;
            })
        }
    }

    handleNewsSlider = () => {
        const slides = document.querySelectorAll(".mainCard");
        const next = document.querySelector("#next");
        const prev = document.querySelector("#prev");
        const intervalTime = 4000;
        let auto = true;

        const nextSlide = () => {
            const current = document.querySelector(".active");
            current.classList.remove("active");
            if (current.nextElementSibling) {
                current.nextElementSibling.classList.add("active");
            } else {
                slides[0].classList.add("active");
            }
            // setTimeout(() => current.classList.remove("active"));
        }
        const prevSlide = () => {
            const current = document.querySelector(".active");
            current.classList.remove("active");
            if (current.previousElementSibling) {
                current.previousElementSibling.classList.add("active");
            } else {
                slides[slides.length - 1].classList.add("active");
            }
            // setTimeout(() => current.classList.remove("active"));
        }

        next.addEventListener("click", () => {
            nextSlide();
            if (auto) {
                clearInterval(this.slideInterval)
                this.slideInterval = setInterval(nextSlide, intervalTime);
            }
        })
        prev.addEventListener("click", () => {
            prevSlide();
            if (auto) {
                clearInterval(this.slideInterval)
                this.slideInterval = setInterval(nextSlide, intervalTime);
            }
        })

        if (auto) {
            this.slideInterval = setInterval(nextSlide, intervalTime);
        }
    }

    render() {
        return (
            <div className="home">
                <HomeSlideshow />

                <div className="home-page container">
                    <div class="home-news">
                        <h1>LATEST NEWS</h1>
                        <div className="news-feed">
                            <FrontNews />
                        </div>

                        <div className="news-links">
                            <span><i id="prev" className="fas fa-chevron-left"></i></span>
                            <Link to="/news">
                                <button>More News</button>
                            </Link>
                            <span><i id="next" className="fas fa-chevron-right"></i></span>
                        </div>
                    </div>

                    <div className="home-wrap">
                        <div className="home-content content-section-1">
                            <img src={Amstaff1} alt="amstaff" />
                            <div className="desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus bibendum, mattis dolor sed, venenatis felis. Praesent ullamcorper diam a tortor blandit, in aliquet risus pharetra.</p>
                            </div>
                        </div>

                        <div className="home-content content-section-2">
                            <div className="paw adult">
                                <Link to="our-dogs">
                                    <img src={AdultPaw} alt="adult paw" />
                                    <h2>Our dogs</h2>
                                </Link>
                            </div>
                            <div className="paw puppy">
                                <Link to="puppies">
                                    <img src={PuppyPaw} alt="puppy paw" />
                                    <h2>Puppies for sale</h2>
                                </Link>
                            </div>
                        </div>

                        <div className="home-content content-section-3">
                            <div className="desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus bibendum, mattis dolor sed, venenatis felis. Praesent ullamcorper diam a tortor blandit, in aliquet risus pharetra.</p>
                            </div>
                            <img src={Cavalier1} alt="cavalier" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home