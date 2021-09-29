import React from 'react';
import NavALogin from '../components/NavALogin';
import styles from '../assets/css/Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import useGetUser from "../hooks/useGetUser";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import useUpdateFullname from "../hooks/useUpdateFullname";
import useUpdateUsername from "../hooks/useUpdateUsername";

function Profile() {
    const name = useSelector((state) => state.keranjang.user);
    // console.log(name);
    const { loading, error, user } = useGetUser(name);
    const { updateFullname, loadingUpdateFullname } = useUpdateFullname();
    const { updateUsername, loadingUpdateUsername } = useUpdateUsername();

    const [editFullname, setEditFullname] = useState(false)
    const [editUsername, setEditUsername] = useState(false)
    const [editGender, setEditGender] = useState(false)
    const [editAge, setEditAge] = useState(false)
    const [editPassword, setEditPassword] = useState(false)

    const [newFullname, setNewFullname] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newGender, setNewGender] = useState("")
    const [newAge, setNewAge] = useState("")
    const [newPassword, setNewPassword] = useState("")

    if (loading || loadingUpdateFullname){
        return <h3>Loading...</h3>;
    }
    if (error){
        console.log("error ",error)
        return null
    }

    const changeFullname = (e) => {
        setNewFullname(
          e.target.value
        )
        console.log(newFullname)
    }
    const changeUsername = (e) => {
        setNewUsername(
          e.target.value
        )
        console.log(newUsername)
    }

    const changeGender = (e) => {
        setNewGender(
          e.target.value
        )
        console.log(newGender)
    }

    const changeAge = (e) => {
        setNewAge(
          e.target.value
        )
        console.log(newAge)
    }
    const changePassword = (e) => {
        setNewPassword(
          e.target.value
        )
        console.log(newPassword)
    }


    const BukaInputFullname = () => {
        setEditFullname(true)
    }
    const TutupInputFullname = () => {
        handleUpdateFullname(user);
        setEditFullname(false);
    }

    const BukaInputUsername = () => {
        setEditUsername(true)
    }
    const TutupInputUsername = () => {
        handleUpdateUsername(user);
        setEditUsername(false)
    }

    const BukaInputGender = () => {
        setEditGender(true)
    }
    const TutupInputGender = () => {
        setEditGender(false)
    }

    const BukaInputAge = () => {
        setEditAge(true)
    }
    const TutupInputAge = () => {
        setEditAge(false)
    }

    const BukaInputPassword = () => {
        setEditPassword(true)
    }
    const TutupInputPassword = () => {
        setEditPassword(false)
    }

    const handleUpdateFullname = (user) => {
        const newData = {
            ...user
        }
        updateFullname({variables:{
            fullname: newFullname,
            username: newData[0].username
        }})
        // console.log(newData[0].username)
        // console.log(newFullname)
    }

    const handleUpdateUsername = (user) => {
        const newData = {
            ...user
        }
        updateUsername({variables:{
            newUsername: newUsername,
            username: newData[0].username
        }})
        // console.log(newData[0].username)
        // console.log(newFullname)
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
                            <div className={styles.caption}>
                                Fullname:
                                {editFullname ? 
                                    <div>
                                        <input type="text" value={newFullname} name="newFullname" onChange={changeFullname}/>
                                        <FaIcons.FaSave onClick={TutupInputFullname}/>
                                    </div>
                                :
                                    <div>
                                        {user[0].fullname} 
                                        <span><FaIcons.FaEdit onClick={BukaInputFullname} /></span>
                                    </div>
                                }
                            </div>
                            <div className={styles.caption}>
                                Username:
                                {editUsername ? 
                                    <div>
                                        <input type="text" value={newUsername} name="newUsername" onChange={changeUsername}/>
                                        <FaIcons.FaSave onClick={TutupInputUsername}/>
                                    </div>
                                :
                                    <div>
                                        {user[0].username}
                                        <span><FaIcons.FaEdit onClick={BukaInputUsername}/></span>
                                    </div>
                                }
                                 
                            </div>
                            <div className={styles.caption}>
                                Gender:
                                {editGender ? 
                                    <div>
                                        <input type="text" value={newGender} name="newGender" onChange={changeGender}/>
                                        <FaIcons.FaSave onClick={TutupInputGender}/>
                                    </div>
                                :
                                    <div>
                                        {user[0].gender}
                                        <span><FaIcons.FaEdit onClick={BukaInputGender}/></span>
                                    </div>
                                }
                                 
                            </div>
                            <div className={styles.caption}>
                                Age:
                                {editAge ? 
                                    <div>
                                        <input type="text" value={newAge} name="newAge" onChange={changeAge}/>
                                        <FaIcons.FaSave onClick={TutupInputAge}/>
                                    </div>
                                :
                                    <div>
                                        {user[0].age}
                                        <span><FaIcons.FaEdit onClick={BukaInputAge}/></span>
                                    </div>
                                }
                                 
                            </div>
                            <div className={styles.caption}>
                                Password: 
                                {editPassword ? 
                                    <div>
                                        <input type="text" value={newPassword} name="newPassword" onChange={changePassword}/>
                                        <FaIcons.FaSave onClick={TutupInputPassword}/>
                                    </div>
                                :
                                    <div>
                                        {user[0].password}
                                        <span><FaIcons.FaEdit onClick={BukaInputPassword}/></span>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
