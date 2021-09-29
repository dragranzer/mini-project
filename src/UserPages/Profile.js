import React from 'react';
import NavALogin from '../components/NavALogin';
import styles from '../assets/css/Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import useGetUser from "../hooks/useGetUser";
import { useState } from "react"

function Profile() {
    const name = useSelector((state) => state.keranjang.user);
    console.log(name);
    const { loading, error, user } = useGetUser(name);
    // console.log(user[0].fullname)
    if (loading){
        return <h3>Loading...</h3>;
    }
    console.log(user)
    if (error){
        console.log("error ",error)
        return null
    }
    
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
                            <div className={styles.title}>
                                Fullname: {user[0].fullname}
                            </div>
                            <div className={styles.title}>
                                Username: {user[0].username}
                            </div>
                            <div className={styles.title}>
                                Gender: {user[0].gender}
                            </div>
                            <div className={styles.title}>
                                Age: {user[0].age}
                            </div>
                            <div className={styles.title}>
                                Password: {user[0].password}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
