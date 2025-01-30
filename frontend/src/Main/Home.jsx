import React from 'react';
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div className="header">
            <img className= "image" src="/lucifer.jpg" alt="lucifer"/>
            <div className='navbar'>
                <div className="logo">
                    <img src="logo.svg" alt="logo" className="logo"/>
                </div>
                <div calssName="navbar-links">
                <Link to = "/" className="navLink">Home</Link>
                <Link to ="/aboutus" className="navLink">About Us</Link>
                </div>
                
                <div className="login">
                    <Link to="/login">
                        <button className="loginButton">Log in</button>
                    </Link>
                </div>
            </div>
            <div className="logo">
                <img src="/logo.jpg" alt="logo" />
            </div>
            <div>
                <h1>Stream Heaven</h1>
            </div>
        </div>
    )
}