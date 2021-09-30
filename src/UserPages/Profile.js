import React from 'react';
import NavALogin from '../components/NavALogin';
import styles from '../assets/css/Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/KeranjangSlice';
import useGetUser from "../hooks/useGetUser";
import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import useUpdateFullname from "../hooks/useUpdateFullname";
import useUpdateUsername from "../hooks/useUpdateUsername";
import useUpdateGender from "../hooks/useUpdateGender";
import useUpdateAge from "../hooks/useUpdateAge";
import useUpdatePassword from "../hooks/useUpdatePassword";

function Profile() {
    const name = useSelector((state) => state.keranjang.user);
    const id = useSelector((state) => state.keranjang.id);
    const dispatch = useDispatch()
    console.log(id);
    console.log(name);
    const { loading, error, user } = useGetUser(id);
    const { updateFullname, loadingUpdateFullname } = useUpdateFullname(id);
    const { updateUsername, loadingUpdateUsername } = useUpdateUsername(id);
    const { updateGender, loadingUpdateGender} = useUpdateGender(id);
    const { updateAge, loadingUpdateAge} = useUpdateAge(id);
    const { updatePassword, loadingUpdatePassword} = useUpdatePassword(id);
    
    console.log(user)


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

    
    // console.log("afloading", loading)
    // console.log("afloadingUpdateUsername", loadingUpdateUsername)
    // console.log("afloadingUpdateFullname", loadingUpdateFullname)
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
        handleUpdateFullname();
        setEditFullname(false);
    }

    const BukaInputUsername = () => {
        setEditUsername(true)
    }
    const TutupInputUsername = () => {
        handleUpdateUsername();
        setEditUsername(false)
    }

    const BukaInputGender = () => {
        setEditGender(true)
    }
    const TutupInputGender = () => {
        handleUpdateGender()
        setEditGender(false)
    }

    const BukaInputAge = () => {
        setEditAge(true)
    }
    const TutupInputAge = () => {
        handleUpdateAge()
        setEditAge(false)
    }

    const BukaInputPassword = () => {
        setEditPassword(true)
    }
    const TutupInputPassword = () => {
        handleUpdatePassword()
        setEditPassword(false)
    }

    const handleUpdateFullname = () => {
        updateFullname({variables:{
            fullname: newFullname,
            id: id
        }})
       
        // console.log(newData[0].username)
        // console.log(newFullname)
    }

    const handleUpdateUsername = () => {
        dispatch(setUser(newUsername));
        // console.log(newData[0].username)
        updateUsername({variables:{
            newUsername: newUsername,
            id: id
        }})
    }

    const handleUpdateGender = () => {
        // console.log(newData[0].username)
        console.log(newGender)
        updateGender({variables:{
            gender: newGender,
            id: id
        }})
    }

    if (loading || loadingUpdateFullname 
        || loadingUpdateUsername || loadingUpdateGender 
        || loadingUpdateAge || loadingUpdatePassword){
        return <h3>Loading...</h3>;
    }

    const handleUpdateAge = () => {
        // console.log(newData[0].username)
        console.log(newAge)
        updateAge({variables:{
            age: newAge,
            id: id
        }})
    }

    const handleUpdatePassword = () => {
        // console.log(newData[0].username)
        console.log(newPassword)
        updatePassword({variables:{
            password: newPassword,
            id: id
        }})
    }

    if (loading || loadingUpdateFullname 
        || loadingUpdateUsername || loadingUpdateGender 
        || loadingUpdateAge || loadingUpdatePassword){
        return <h3>Loading...</h3>;
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
