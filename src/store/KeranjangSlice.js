import { createSlice } from '@reduxjs/toolkit'

const initialValue = []
const jumlahBarang = 0
const user = ""

export const KeranjangSlice = createSlice ({
    name: "keranjang",
    initialState:{
        barang: initialValue,
        jumlah: jumlahBarang,
        user: user
    },
    reducers:{
        setUser: (state, action) => {
            console.log(action.payload)
            // state.user = action.payload.nama
            // console.log(state.user)
        }
    }
})

export const {setUser, } = KeranjangSlice.actions;
export default KeranjangSlice.reducer;