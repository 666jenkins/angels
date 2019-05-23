import React from 'react'
import k1 from '../../images/k1.jpg'
import k2 from '../../images/k2.jpg'
import k4 from '../../images/k4.jpg'
import k5 from '../../images/k5.jpg'
import k6 from '../../images/k6.jpg'

class HomeSlideshow extends React.Component {
    constructor() {
        super()

        this.state = {
            index: 0,
            images: [k1, k2, k4, k5, k6]
        }
    }

    componentDidMount() {
        this.slide()
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    slide = () => {

        let i = this.state.index
        const { images } = this.state


        const slider = document.getElementById("slider")

        slider.classList.remove('filter-animation')
        slider.style.backgroundImage = `url(${images[i]})`
        void slider.offsetWidth
        slider.classList.add('filter-animation')

        if (i < images.length - 1) {
            this.setState({ index: this.state.index + 1 })
        } else {
            this.setState({ index: 0 })
        }

        this.timeout = setTimeout(this.slide, 3000);
    }

    render() {
        return (
            <>
                <div className="slider-home" id="slider"></div>
                <div className="overlay-home">
                    <h1>Award winning, fine bred and incredibly cute dogs</h1>
                </div>
            </>
        )
    }
}

export default HomeSlideshow