import React from 'react'
import './style.css';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="nav-header">
                <div className='nav-subsection'>
                    <div className='nav-item main-tittle'>Welcome to Room</div>
                    <Link  to='/'  className='nav-item'>Home</Link> 
                   <Link  to='mybooking'  className='nav-item'>My Booking</Link> 
                </div>
                <div>
                    <div>Ramesh</div>
                    <div>Date:{new Date().toLocaleDateString()}</div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Header;