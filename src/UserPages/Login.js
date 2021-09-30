import React from 'react'
import {Link, useHistory} from "react-router-dom";
import styles from '../assets/css/Login.module.css'
import NavBLogin from '../components/NavBLogin'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { setUser } from '../store/KeranjangSlice';
import useLazyGetUser from "../hooks/useLazyGetUser";
import { GetUser2 } from "../graphql/query";
import { useLazyQuery, useQuery } from "@apollo/client";


function Login() {
    let history = useHistory();
    const [state, setState] = useState({
        nama: "",
        password: "",
        id:""
    })
    
    const { user, loading, error, getData_qry } = useLazyGetUser();
    // const [getData_qry, { data: user, loading, error }] = useLazyQuery(GetUser2);
    const dispatch = useDispatch()
    // console.log(getData_qry)
    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return null;
    }
    console.log(user)
    
    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
        // console.log(state)
    }

    const handleSubmit = (e) => {
        console.log("click")
        getData_qry({variables : {
            username : state.nama
        }})
        console.log(loading)
        dispatch(setUser(state.nama));
    }
    

    // if (user){
    //     history.push("/home");
    // }else{
        
    // }

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
                    <div className={styles.signin} onClick={handleSubmit}>
                        <div className={styles.signin}>
                            <p>Login</p>
                        </div>
                    </div>
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
