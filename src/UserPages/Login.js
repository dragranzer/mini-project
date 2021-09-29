import React from 'react'
import {Link} from "react-router-dom";
import styles from '../assets/css/Login.module.css'
import NavBLogin from '../components/NavBLogin'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setUser } from '../store/KeranjangSlice';
// import useGetUser from "../hooks/useGetUser";

function Login() {
    const [state, setState] = useState({
        nama: "",
        password: "",
    })
    const dispatch = useDispatch()

    // const { getUser, loading, error, user } = useGetUser();
    
    // if (error){
    //     console.log("error ",error)
    //     return null
    // }

    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
        // console.log(state)
    }
    

    const handleSubmit = (e) => {
        dispatch(setUser(state));
    }

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
                        <input type="text" placeholder="      Username" value={state.nama} name="nama" onChange={onChange}/>
                        <div className={styles.caption}>
                            Password:
                        </div>
                        <input type="text" placeholder="      Password" value={state.password} name="password" onChange={onChange}/>
                    </div>
                    <Link className={styles.signin} to="/home" onClick={handleSubmit}>
                        <div className={styles.signin}>
                            <p>Login</p>
                        </div>
                    </Link>
                    <Link to="/log-admin">
                        <div className={styles.admin}>
                            Login sebagai admin?
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
