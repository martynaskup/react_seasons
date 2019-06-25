import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = { latitude: null, errorMessage: '' };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            pos => this.setState({ latitude: pos.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.latitude) {
            return <div>Latitude: {this.state.latitude}</div>;
        }

        return <div>Loading!</div>;
    }
}

ReactDOM.render(< App/>, document.querySelector('#root'));