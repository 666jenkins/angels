import React from 'react'
import dog from './Dogs'
import AllOurDogs from './AllOurDogs'
import './dogPage.css'

class OurDogs extends React.Component {
    constructor() {
        super()
        this.state = {
            dog: [],
            filter: 'all'
        }
    }
    componentDidMount() {
        this.setState({
            dog: dog
        });
    }
    filterByRase = (e) => {
        if (e.target.checked === true) {
            this.setState({
                filter: e.target.value
            })
            const otherInputs = document.querySelectorAll(`#filter div > input:not(#${e.target.id})`);
            otherInputs.forEach(node => node.checked = false)
        } else {
            this.setState({
                filter: ''
            })
        }

    }
    render() {
        const { dog, filter } = this.state;
        const amstaff = dog.filter(dog => dog.rase === 'amstaff');
        const cavalier = dog.filter(dog => dog.rase === 'cavalier');

        if (dog.length === 0) {
            return "loading..."
        }
        return (
            <div className="dogBg">
                <div className='dogPage'>
                    <h1>Our Dogs</h1>
                    <div id='filter'>
                        <p>Cavalier</p>
                        <div className='checkbox-wrap'>
                            <input type='checkbox' id='rase2' value='cavalier' onChange={this.filterByRase} />
                        </div>
                        <p>Amstaff</p>
                        <div className='checkbox-wrap'>
                            <input type='checkbox' id='rase1' value='amstaff' onChange={this.filterByRase} />
                        </div>

                    </div>
                    <div className='dogs'>
                        < AllOurDogs dog={filter === 'cavalier' ? cavalier : filter === 'amstaff' ? amstaff : dog} />
                    </div>
                </div>
            </div>
        )

    }
}


export default OurDogs