import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const ContributorDetail = () => {
const [person, setPerson] = useState([]);

const {id} = useParams()
// console.log('id=',id)

useEffect(() => {
    const getData = async () => {
        const result = await axios (`https://reqres.in/api/users/${id}`);
        setPerson(result.data.data);
    }
    getData()
},[id])
// console.log(person.id)

const prevId = person.id === 1 ? 6 : person.id-1;
const nextId = person.id === 6 ? 1 : person.id+1

    return(
        <div className='single-cont'>
            <h1>Contact Detail</h1>
            <div className='cont-detail'>
    <h3>{person.first_name} {person.last_name}</h3>
                <img src={person.avatar} alt='avatar'/>
                <h3>{person.email}</h3>
                <Link to={`./${prevId}`}>
                <button>Prev</button>
                </Link>
                <Link to={`./${nextId}`}>
                <button>Next</button>
                </Link>

            </div>
        </div>
        
    )
}

export default ContributorDetail;
