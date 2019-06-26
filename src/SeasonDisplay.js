import React from 'react';

const getSeason = (lat, month) => {
    if ( month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : "winter";
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonsDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const text = season === 'summer' 
            ? <h1>Let's hit the beach!</h1> 
            : <h1>Brrr, it's chilly!</h1>;
    const icon = season === 'summer' ? 'sun' : 'snowflake';

    return <div>
        <i className= {`${icon} loading icon`} />
        {text}
        <i className= {`${icon} loading icon`} />
    </div>    
}

export default SeasonsDisplay;