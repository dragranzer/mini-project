import React from 'react'
import {Link} from "react-router-dom";
import styles from '../assets/css/Login.module.css'
import NavBLogin from '../components/NavBLogin'

function login() {
    return (
        <div>
            <NavBLogin />
            <div className={styles.body}>
                <div className={styles.loginBox}>
                    <div className={styles.contentBox}>
                        <div className={styles.title}>
                            Login
                        </div>
                        <div className={styles.caption}>
                            Username:
                        </div>
                        <input type="text" placeholder="      Username"/>
                        <div className={styles.caption}>
                            Password:
                        </div>
                        <input type="text" placeholder="      Password"/>
                    </div>
                    <Link className={styles.signin} to="/home-admin">
                        <div className={styles.signin}>
                            <p>Login</p>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className={styles.admin}>
                            Login sebagai User?
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default login
