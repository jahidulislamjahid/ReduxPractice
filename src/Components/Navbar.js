import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.scss';

const Navbar = () => {
    return (
        <div className='navigation'>
            <Link to={'/home'}>
                <button>Home</button>
            </Link>
            <Link to={'/readinglist'}>
                <button>Reading List</button>
            </Link>
            <button>Completed</button>
        </div>
    );
};

export default Navbar;