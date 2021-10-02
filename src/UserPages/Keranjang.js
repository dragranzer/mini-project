import React from 'react';
import styles from '../assets/css/Keranjang.module.css';
import NavALogin from '../components/NavALogin';
import { useSelector, useDispatch } from 'react-redux';
import ListKeranjang from '../components/ListKeranjang';
import { hapusKeranjang } from '../store/KeranjangSlice';

function Keranjang() {
    const barang = useSelector((state) => state.keranjang.barang);
    const dispatch = useDispatch();
    console.log(barang)
    let jumlahBarang = 0;
    barang.map((item) =>{
        jumlahBarang = jumlahBarang + item.jumlah;
    })
    console.log(jumlahBarang)
    return (
        <div>
            <NavALogin />
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.title}>
                        Keranjang
                    </div>
                    <table cellPadding="10px" cellSpacing="0" className={styles.table}>
                        <thead bgcolor="#4F698F">
                            <td>Nama</td>
                            <td>Harga</td>
                            <td>Jumlah</td>
                            <td>Total Harga</td>
                            <td>Action</td>
                        </thead>
                        <tbody>
                            {barang.map((item)=> (    
                                <ListKeranjang 
                                    id={item.id}
                                    name={item.name} 
                                    harga={item.harga} 
                                    jumlah={item.jumlah}
                                    hapusKeranjang={() => {dispatch(hapusKeranjang(item.id))}}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.jumlahBarang}>
                        Jumlah Barang: {jumlahBarang}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Keranjang
