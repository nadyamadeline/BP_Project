import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BASE_API} from './constant';
import {Link} from 'react-router-dom';

const Contributor = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
const fetchData = async () => {
    const result = await axios (BASE_API);
    setUsers(result.data.data);
}
fetchData();
}, []);

// console.log(users)

    return(
        <div className='cont'>
            <h1>Brought to you by our Contributors...</h1>
            <div className='contributor'>
            
            {users.map((user)=> (
                <li>
                    <div className='cont-card'>
                    <h4>{user.first_name} {user.last_name}</h4>
                    <img src={user.avatar} alt='avatar'/>
                    <Link to={`/detail-contributor/${user.id}`}>
                    <h4>More Info</h4>
                    </Link>
                    
                    </div>
                </li>
            ))}
            </div>
        </div>
        
    )
}

export default Contributor;