import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){
    const navStyle = {
        color: '#17181b'
    }

    return(
        <nav>
            <h2>BLACKPINK</h2>
            <ul className='nav-link'>
                <Link style={navStyle} to='/'>
                <li>Home</li>
                </Link>

                <Link style={navStyle} to='/about'>
                <li>About</li>
                </Link>

                <Link style={navStyle} to='/blackpink'>
                <li>Members</li>
                </Link>

                <Link style={navStyle} to='/fans'>
                <li>Fans</li>
                </Link>

                <Link style={navStyle} to='/contributor'>
                <li>Contributors</li>
                </Link>

                <Link style={navStyle} to='/counter'>
                <li>Counter</li>
                </Link>
                
            </ul>
        </nav>
    )
}
export default Nav;