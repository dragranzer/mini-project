import { createSlice } from '@reduxjs/toolkit'

const initialValue = []
const jumlahBarang = 0
const user = ""
const id = 0

export const KeranjangSlice = createSlice ({
    name: "keranjang",
    initialState:{
        barang: initialValue,
        jumlah: jumlahBarang,
        user: user,
        id: id,
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
        }
    }
})

export const {setUser, setID} = KeranjangSlice.actions;
export default KeranjangSlice.reducer;