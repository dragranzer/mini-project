import React from 'react'
import styles from '../assets/css/ListFish.module.css'

const ListFish = ({category, description, harga, id, imgUrl, stock, name}) => {
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
                Stock: Rp{stock}
            </div>
            <div className={styles.detail}>
                Detail
            </div>
            <div className={styles.buy}>
                Buy
            </div>
        </div>
    )
}

export default ListFish
