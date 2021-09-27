import React from 'react'
import {Link} from "react-router-dom";
import '../assets/css/Login.css'
import NavbarBefLogin from '../components/NavbarBefLogin'

function login() {
    return (
        <div>
            <NavbarBefLogin />
            <div className="body">
                <div className="login-box">
                    <div className="content-box">
                        <div className="title">
                            Login
                        </div>
                        <div className="caption">
                            Username:
                        </div>
                        <input type="text" placeholder="      Username"/>
                        <div className="caption">
                            Password:
                        </div>
                        <input type="text" placeholder="      Password"/>
                    </div>
                    <Link className='signin' to="/home">
                        <div className='signin'>
                            <p>Login</p>
                        </div>
                    </Link>
                    <div className="admin">
                        Login sebagai admin?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login
