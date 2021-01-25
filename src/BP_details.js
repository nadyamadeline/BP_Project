import React from 'react';
import {useParams} from 'react-router-dom';
import Jennie from './assets/pictures/jennie.jpeg'
import Jisoo from './assets/pictures/jisoo.jpg'
import Rose from './assets/pictures/rose.jpg'
import Lisa from './assets/pictures/lisa.jpg'

const Members = {
    1: {
        name: 'Kim Jennie',
        photo: Jennie,
        nationality: 'New Zealand/Korean',
        id: 1,
        bio: 'Jennie Kim, known mononymously as Jennie, is a South Korean singer and rapper. Born and raised in South Korea, Kim studied in New Zealand at the age of eight for five years, before returning to South Korea in 2010.'

    },
    2: {
        name: 'Kim Jisoo',
        photo: Jisoo,
        nationality: 'Korean',
        id: 2,
        bio: 'Kim Ji-soo, better known mononymously as Jisoo, is a South Korean singer and actress. She made her debut in August 2016 as a member of the girl group Blackpink under YG Entertainment.'
    },
    3: {
        name: 'Roseanne Park',
        photo: Rose,
        nationality: 'Australian/Korean',
        id: 3,
        bio: 'Roseanne Park, better known by the mononym Rosé, is a New Zealand singer based in South Korea. Rosé signed with South Korean label YG Entertainment following an audition in 2012, training there for four years. She eventually made her debut as a vocalist in the girl group Blackpink in August 2016.'
    },
    4: {
        name: 'Lalisa Manoban',
        photo: Lisa,
        nationality: 'Thai',
        id: 4,
        bio: 'Lalisa Manoban, better known by the mononym Lisa, is a Thai rapper, singer, and dancer based in South Korea. She is a member of the South Korean girl group Blackpink under YG Entertainment.'
    }
}

const DetailProfile = ()=>{
    const {id} = useParams();
    return(
        <div className='info'>
            
            <h1>{Members[id].name}</h1>
            <img src={Members[id].photo} className='photo-info'/>
            <h3>Nationality: {Members[id].nationality}</h3>
            <p>{Members[id].bio}</p>
        </div>
    )
}

export default DetailProfile;