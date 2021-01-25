import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Cards(props){
    const [color, setColor] = useState('card');
    const isSelected = () => {
        color === 'card' ? setColor('card_new') : setColor('card');
    }

    return(
        <div className={color} onClick={isSelected} >
            <h3>{props.name}</h3>
            <img src={props.photo} className='photo' alt={props.name}/>
            <h4>{props.position}</h4>
            <Link to={`/detail-profile/${props.id}`}>
            <h4>More Info</h4>
            </Link>
            
        </div>
    )
}

export default Cards;