import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import styles from '../assets/css/InputAdmin.module.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import useInsertBarang from "../hooks/useInsertBarang";
import { app } from "../base";
import "firebase/storage";

function Input() {
    const { insertBarang, loadingInsert } = useInsertBarang();
    const [state, setState] = useState({      
        name: "",
        category: "",
        stock: "",
        description: "",
        imgUrl:"",
        harga:""
    });

    const tambahBarang = newUser => {
        // console.log(newUser.nama)
        const newData = {
            ...newUser
        }
        // console.log(newData)
        insertBarang({variables :{
            name: newData.name,
            category: newData.category,
            stock: newData.stock,
            description: newData.description,
            imgUrl: newData.imgUrl,
            harga: newData.harga
        }})
    }
    if(loadingInsert){
        return <h1>Inserting Image..</h1>
    }

    const handleSubmit = (e) => {
        tambahBarang(state);
        setState({      
            name: "",
            category: "",
            stock: "",
            description: "",
            imgUrl:"",
            harga:""
        });
    }

    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        })
        // console.log(e.target.name)
        // console.log(state)
    }

    const onChangeImg = (e) => {
        const file = e.target.files[0];
        // console.log(app)
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name);
        // console.log("file = ", file);
        // console.log("storageRef = ", storageRef);
        // console.log("fileRef = ", fileRef);
        fileRef.put(file).then((e) => {
        //   console.log("Uploaded a file");
        //   console.log("didalam e = ", e);
          e.ref.getDownloadURL().then(function (downloadURL) {
            // console.log("File available at", downloadURL);
            setState({
                ...state,
                imgUrl: downloadURL,
            })
          });
          
        });
        
      };

    return (
        <div>
            <NavbarAdmin />
            <div className={styles.body}>
                <div  className={styles.boxInput}>
                    <div className={styles.title}>
                        Input Barang
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <input type="file" name="imgUrl" onChange={onChangeImg}/>
                        </div>
                        <div className="col-7">
                            <div className={styles.caption}>
                                Nama:
                            </div>
                            <input type="text" placeholder="      Username" value={state.name} name="name" onChange={onChange}/>
                            <div className={styles.caption}>
                                Kategori:
                            </div>
                            <input type="text" placeholder="      Username" value={state.category} name="category" onChange={onChange}/>
                            <div className={styles.caption}>
                                Stock:
                            </div>
                            <input type="text" placeholder="      Username" value={state.stock} name="stock" onChange={onChange}/>
                            <div className={styles.caption}>
                                Harga:
                            </div>
                            <input type="text" placeholder="      Username" value={state.harga} name="harga" onChange={onChange}/>
                            <div className={styles.caption}>
                                Deskripsi:
                            </div>
                            <textarea name="" id="" cols="50" rows="5" value={state.description} name="description" onChange={onChange}>

                            </textarea>
                            <Link className={styles.signin} to="#" onClick={handleSubmit}>
                                <div className={styles.signin}>
                                    <p>Submit</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Input
