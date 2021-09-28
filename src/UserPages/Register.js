import React from 'react'
import {Link} from "react-router-dom";
import styles from '../assets/css/Register.module.css'
import NavBLogin from '../components/NavBLogin'

function register() {
    return (
        <div>
            <NavBLogin />
            <div className={styles.body}>
                <div className={styles.registerBox}>
                    <div className={styles.contentBox}>
                        <div className={styles.title}>
                            Register
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username"/>
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username"/>
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username"/>
                                </div>
                                <div className="col-6">
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username"/>
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username"/>
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username"/>
                                </div>
                            </div>
                        </div>
                        <Link className={styles.signin} to="/">
                            <div className={styles.signin}>
                                <p>Submit</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default register
