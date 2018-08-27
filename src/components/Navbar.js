import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (loggedInUser) => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className='projectContainer'>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <NavLink to='/' exact activeClassName='active' className="nav-item nav-link">Home</NavLink>
                            <NavLink to='/new' exact activeClassName='active' className="nav-item nav-link">New Question</NavLink>
                            <NavLink to='/leaderboard' exact activeClassName='active' className="nav-item nav-link">Leaderboard</NavLink>
                        </ul>

                        <span className="navbar-text margin-left-100 margin-right-25 text-info">Hello {loggedInUser.loggedInUser.name}</span>
                        <span className="navbar-nav"><button className="btn-sm btn-info">Logout</button></span>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;