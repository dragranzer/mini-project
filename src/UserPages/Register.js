import React from 'react'
import {Link} from "react-router-dom";
import styles from '../assets/css/Register.module.css'
import NavBLogin from '../components/NavBLogin'
import useInsertUser from "../hooks/useInsertUser";
import { useState } from "react"

function Register() {

    const { insertUser, loadingInsert } = useInsertUser();
    const [state, setState] = useState({      
        age: "",
        fullname: "",
        gender: "",
        password: "",
        username: "",
        passConfirm:"",
    })
    const tambahUser = newUser => {
        // console.log(newUser.nama)
        const newData = {
            ...newUser
        }
        // console.log(newData)
        insertUser({variables :{
            age: newData.age,
            fullname: newData.fullname,
            gender: newData.gender,
            password: newData.password,
            username: newData.username,
        }})
    }

    const handleSubmit = (e) => {
        tambahUser(state);
    }

    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
        // console.log(state)
    }
   
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
                                        Full Name:
                                    </div>
                                    <input type="text" placeholder="      Username" value={state.fullname} name="fullname" onChange={onChange}/>
                                    <div className={styles.caption}>
                                       Gender:
                                    </div>
                                    <input type="text" placeholder="     Gender" value={state.gender} name="gender" onChange={onChange}/>
                                    <div className={styles.caption}>
                                        Password:
                                    </div>
                                    <input type="text" placeholder="      Password" value={state.password} name="password" onChange={onChange}/>
                                </div>
                                <div className="col-6">
                                    <div className={styles.caption}>
                                        Username:
                                    </div>
                                    <input type="text" placeholder="      Username" value={state.username} name="username" onChange={onChange}/>
                                    <div className={styles.caption}>
                                        Age:
                                    </div>
                                    <input type="text" placeholder="      Age" value={state.age} name="age" onChange={onChange}/>
                                    <div className={styles.caption}>
                                        Password Confirm:
                                    </div>
                                    <input type="text" placeholder="      Password Confirm" value={state.passConfirm} name="passConfirm" onChange={onChange}/>
                                </div>
                            </div>
                        </div>
                        <Link className={styles.signin} to="/" onClick={handleSubmit}>
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

export default Register
