import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { latitude: null };
    }

    render() {
        navigator.geolocation.getCurrentPosition(
            pos => this.setState({ latitude: pos.coords.latitude}),
            err => console.log(err)        
    );
        return <div>Lattitude: {this.state.latitude}</div>
    }
}

ReactDOM.render(< App/>, document.querySelector('#root'));