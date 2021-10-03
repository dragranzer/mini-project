import React from 'react';
import styles from '../assets/css/Checkout.module.css';
import NavALogin from '../components/NavALogin';
import { useSelector, useDispatch } from 'react-redux';
import ListKeranjangCheckout from '../components/ListKeranjangCheckout';

function ReviewPembelian() {
    const fullname = useSelector((state) => state.keranjang.fullname);
    const barang = useSelector((state) => state.keranjang.barang);
    console.log(fullname);
    return (
        <div>
            <NavALogin />
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        Checkout
                    </div>
                    <div className={styles.fullname}>
                        Nama Pembeli: {fullname}
                    </div>
                    <div>
                        Daftar Barang:
                        <table cellPadding="10px" cellSpacing="0" className={styles.table}>
                        <thead bgcolor="#4F698F">
                            <td>Nama</td>
                            <td>Harga</td>
                            <td>Jumlah</td>
                            <td>Total Harga</td>
                        </thead>
                        <tbody>
                            {barang.map((item)=> (    
                                <ListKeranjangCheckout
                                    id={item.id}
                                    name={item.name} 
                                    harga={item.harga} 
                                    jumlah={item.jumlah}
                                />
                            ))}
                        </tbody>
                    </table>
                    </div>                   
                </div>

            </div>
        </div>
    )
}

export default ReviewPembelian
