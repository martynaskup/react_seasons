import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { latitude: null, errorMessage: '' };
    }

    render() {
        navigator.geolocation.getCurrentPosition(
            pos => {
                this.setState({ latitude: pos.coords.latitude });
            },
            err =>{
                this.setState({ errorMessage: err.message });
                // console.log(err.message);
            } 
    );
        return (
        <div>
            Lattitude: {this.state.latitude}
            <br />
            Error: {this.state.errorMessage}
        </div>
        )
    }
}

ReactDOM.render(< App/>, document.querySelector('#root'));