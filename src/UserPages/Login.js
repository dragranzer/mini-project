import React from 'react'
import {Link, useHistory} from "react-router-dom";
import styles from '../assets/css/Login.module.css'
import NavBLogin from '../components/NavBLogin'
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { setUser, setID } from '../store/KeranjangSlice';
import useLazyGetUser from "../hooks/useLazyGetUser";


function Login() {
    let history = useHistory();
    const [state, setState] = useState({
        nama: "",
        password: "",
    })
    const [errMsg, setErrMsg] = useState(false)
    
    const { user, loading, error, getData_qry } = useLazyGetUser();
    useEffect(()=>{
        console.log("masuk useEffect ")
        if (user.length !== 0 ){
            if(user[0].password === state.password){
                setErrMsg(false);
                console.log("masuk if ")
                console.log(user[0].password)
                console.log(state.password)
                history.push("/home");
                dispatch(setID(user[0].id))
                dispatch(setUser(state));
            }else{
                setErrMsg(true);
            }
        }else{
            
            console.log("masuk else ")
        }
    }, [user])
    
    const dispatch = useDispatch()
    // console.log(getData_qry)
    if(loading){
        return <h1>Loading...</h1>
    }
    

    if(error){
        return null;
    }
    
    
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
        console.log(user)
        setErrMsg(true);
    }
    console.log("state.nama = ", user)
    
    

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
                        <input type="password" placeholder="      Password" value={state.password} name="password" onChange={onChange}/>
                    </div>
                    <div className={styles.signin} onClick={handleSubmit}>
                        
                            <p>Login</p>
                        
                    </div>
                    <div className={styles.errMsg}>
                        {errMsg ? "Username dan Password tidak cocok":""}
                    </div>
                    <div className={styles.signUp}>
                        <p>Belum punya akun? <Link to ="/register">Daftar</Link></p>
                    </div>
                    <Link to="/log-admin">
                        <div className={styles.admin}>
                            <p>Login sebagai admin?</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
