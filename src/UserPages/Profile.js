import React from 'react';
import NavALogin from '../components/NavALogin';
import styles from '../assets/css/Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';

function Profile() {

    
    return (
        <div>
             <NavALogin />
             <div className={styles.body}>
                <div className="row">
                    <div className="col-5">

                    </div>
                    <div className="col-7">
                        <div className={styles.boxProfile}>
                            <div className={styles.title}>
                                Profile
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
