import React from 'react';

function FanCard(props){

    return(
        <div className='fan-card'>
            <h4>Fan {props.id}</h4>
            <h4>{props.name}</h4>
            <button onClick={props.function}>Remove me.</button>
        </div>
    )
}

export default FanCard;