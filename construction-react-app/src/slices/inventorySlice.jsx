import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import inventoryService from "../service/inventoryService";



const initialState = {
    itemName: '',
    bulk: '',
    type: '',
    purchaseDate: null, //Date.now if error
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

// Create new inventory item
export const createInventory = createAsyncThunk(
    'inventory/create',
    async (inventoryData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await inventoryService.createInventory(inventoryData, token)
        } catch (error) {
            const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)



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
