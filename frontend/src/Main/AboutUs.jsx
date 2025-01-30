import React from 'react';
import {Link} from "react-router-dom";

export default function AboutUs(){
    return(
        <>
            <div className="aboutus">
                <div className="aboutus-navbar">
                    <div className="aboutus-navbar-items aboutus-navbar-logo">
                        <Link to="/">
                            <img src="/logo.svg" alt="logo" className="aboutus-logo"/>
                        </Link>
                    </div>
                    <div className="aboutus-navbar-items aboutus-navbar-links">
                        <ul className="aboutus-navbar-links-list">
                            <Link className="aboutus-navbar-links-list-items">Home</Link>
                            <Link className="aboutus-navbar-links-list-items">hlfhslhf</Link>
                            <Link className="aboutus-navbar-links-list-items">hlfhslhf</Link>
                            <Link className="aboutus-navbar-links-list-items">hlfhslhf</Link>
                            <Link className="aboutus-navbar-links-list-items">hlfhslhf</Link>
                        </ul>
                    </div>
                    <div className="aboutus-navbar-items aboutus-navbar-profile"></div>
                </div>
            </div>
        </>
    );
}