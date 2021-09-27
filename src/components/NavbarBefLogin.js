import React from 'react'
import '../assets/css/NavbarBefLogin.css'
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';

function NavbarBefLogin() {

    const [date, setDate] = useState(new Date());
  
    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        console.log("masuk settimer")
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="tes">
            <Link className="content" to="/about-us">
                <p>About Us</p>
            </Link>
        </div>
    )
}
{/* <div style={{marginLeft: "4%", fontSize:"30px"}}>{date.toLocaleTimeString()}</div> */}
export default NavbarBefLogin
