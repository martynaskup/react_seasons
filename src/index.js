import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        navigator.geolocation.getCurrentPosition(
            pos => console.log('Lattitude:', pos.coords.latitude),
            err => console.log(err)        
    );
        return <div>Lattitude: </div>
    }
}

ReactDOM.render(< App/>, document.querySelector('#root'));