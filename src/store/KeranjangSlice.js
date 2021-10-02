import { createSlice } from '@reduxjs/toolkit'

const initialValue = []
const idFish = []
const user = ""
const id = 0
const fish = {}
const fishEdit = {}

export const KeranjangSlice = createSlice ({
    name: "keranjang",
    initialState:{
        barang: initialValue,
        listIdinKeranjang: idFish,
        user: user,
        id: id,
        fish: fish,
        fishEdit: fishEdit,
    },
    reducers:{
        setUser: (state, action) => {
            // console.log(action.payload.nama)
            state.user = action.payload.nama
            // console.log(state.user)
        },
        setID: (state, action) => {
            // console.log(action.payload)
            state.id = action.payload
        },
        setFish: (state, action) =>{
            console.log(action.payload);
            state.fish = action.payload;
        },
        tambahKeranjang: (state, action) =>{
            console.log(action.payload)
            // state.listIdinKeranjang = [...state.listIdinKeranjang, action.payload.id]
            // console.log(state.listIdinKeranjang)
            if(state.listIdinKeranjang.includes(action.payload.id)){
                console.log("ketemu")
                state.listIdinKeranjang = [...state.listIdinKeranjang]
                // console.log(state.listIdinKeranjang)
                const newData = state.barang.filter((item) => item.id === action.payload.id);
                newData.map(item => {
                    item.jumlah = item.jumlah + 1
                })
                state.barang = [...state.barang]
                console.log(state.barang)
            }else{
                // console.log("ganemu")
                state.listIdinKeranjang = [...state.listIdinKeranjang, action.payload.id]
                // console.log(state.listIdinKeranjang)
                const newData = {
                    ...action.payload,
                    jumlah: 1,
                }
                state.barang = [...state.barang, newData]
                console.log(state.barang)
            }
        },
        hapusKeranjang: (state, action) => {
            // console.log("hapus id = ",action.payload);
            // state.listIdinKeranjang = [...state.listIdinKeranjang, action.payload]
            state.barang = state.barang.filter(item => {
                return item.id !== action.payload;
            })
            // console.log("jalan");
            state.listIdinKeranjang = state.listIdinKeranjang.filter(item => {
                // console.log(item)
                return item !== action.payload;
            })
            // console.log(state.listIdinKeranjang)
        },
        editJumlahPesanan: (state, action) => {
            console.log(action.payload);
        },
        setFishEdit: (state, action) => {
            console.log(action.payload);
            state.fishEdit = action.payload;
        }
    }
})

export const {setUser, setID, setFish, tambahKeranjang, hapusKeranjang, setFishEdit} = KeranjangSlice.actions;
export default KeranjangSlice.reducer;