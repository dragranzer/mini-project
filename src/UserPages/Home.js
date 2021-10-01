import React from 'react';
import NavALogin from '../components/NavALogin';
import styles from '../assets/css/Home.module.css';
import { useState } from "react";
import useGetAllFish from "../hooks/useGetAllFish";
import ListFish from "../components/ListFish"

function Home() {
    const { loading, error, fishes } = useGetAllFish();
    if(loading){
        return <h1>Getting Fish...</h1>
    }
    if(error){
        return null;
    }
    console.log(fishes);
    return (
        <div>
            <NavALogin />
            <div className={styles.body}>
            {
                fishes.map(({category, description, harga, id, imgUrl, stock, name}) => (
                    <ListFish
                        category={category}
                        description={description}
                        harga={harga}
                        id={id}
                        imgUrl={imgUrl}
                        stock={stock}
                        name={name}
                    />
                ))
                
            }
            </div>
        </div>
    )
}

export default Home
