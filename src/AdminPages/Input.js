import React from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import styles from '../assets/css/InputAdmin.module.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import useInsertBarang from "../hooks/useInsertBarang";

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
        console.log(state)
    }

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
                            <input type="file" value={state.imgUrl} name="imgUrl" onChange={onChange}/>
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
