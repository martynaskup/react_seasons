import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonDisplay';
import LoadSpinner from './LoadSpinner';
import './index.css';

class App extends React.Component {
    state = { latitude: null, errorMessage: '' };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            pos => this.setState({ latitude: pos.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
        return <div>Error: {this.state.errorMessage}</div>;
    }
    
    if (!this.state.errorMessage && this.state.latitude) {
        return <SeasonsDisplay latitude={this.state.latitude} />;
    }

    return  <LoadSpinner message='Please accept the location request'/>;
}

    render() {
        return (
            <div className="border">
                {this.renderContent()};
            </div>
        );
    }
}

ReactDOM.render(< App/>, document.querySelector('#root'));