import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: `Let's hit the beach!`,
        iconName: `sun`
    },
    winter: {
        text: `Brrr, it's chilly!`,
        iconName: `snowflake`
    }
};

const getSeason = (lat, month) => {
    if ( month > 2 && month < 9 ) {
        return lat > 0 ? 'summer' : "winter";
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonsDisplay = (props) => {
    const season = getSeason(props.latitude, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return <div className={`season-display ${season}`}>
        <i className= {`icon-left massive ${iconName} loading icon`} />
        <h1>{text}</h1>
        <i className= {`icon-right massive ${iconName} loading icon`} />
    </div>    
};

export default SeasonsDisplay;