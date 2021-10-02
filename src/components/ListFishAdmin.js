import React from 'react';
import styles from '../assets/css/ListFishAdmin.module.css';

const ListFishAdmin = ({category, description, harga, id, imgUrl, stock, name, handleDelete}) => {


    return (
        <div className={styles.Item}>
            <img className={styles.ItemImg} src={imgUrl} alt="" />
            <div className={styles.title}>
                {name}
            </div>
            <div className={styles.title}>
                Harga: Rp.{harga}
            </div>
            <div className={styles.title}>
                Stock: {stock}
            </div>
            <div className={styles.detail} onClick={()=>handleDelete(id)}>
                Hapus
            </div>
            <div className={styles.buy}>
                Edit
            </div>
        </div>
    )
}

export default ListFishAdmin