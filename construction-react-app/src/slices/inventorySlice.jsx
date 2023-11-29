import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    itemName: '',
    bulk: '',
    type: '',
    purchaseDate: Date.now,
    energyScore: 0,
    price: 0.0,
    quantity: 0,
    purchaseOrderNo: 0,
    street: '',
    city: '',
    state: '',
    zipcode: 0,
    condition: ''
}

// TODO: ---CREATE INVENTORY THUNK
export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
    // TODO: EXTRA REDUCERS
})

export const {reset} = inventorySlice.actions
export default inventorySlice.reducer
