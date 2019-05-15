import React from 'react'
import dog from './Dogs';
import AllOurDogs from './AllOurDogs';

class OurDogs extends React.Component {
    constructor() {
        super()
        this.state = {
            dog: []
        }
    }
    componentDidMount() {
        this.setState({
            dog: dog
        });
    }
    render() {
        const dog = this.state.dog;
        if (dog.length === 0) {
            return "loading..."
        }
        return (
            <div className='dogPage'>
                <h1>Our Dogs</h1>
                <div>
                    < AllOurDogs dog={dog} />
                </div>
            </div>
        )

    }
}


export default OurDogs