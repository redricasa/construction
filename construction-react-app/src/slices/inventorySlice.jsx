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
    condition: '',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
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

// Get all user inventory
export const getAllInventoryByUser = createAsyncThunk(
    'inventory/get',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await inventoryService.getAllInventoryByUser(token)
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
// TODO: --- UPDATE inventory  updateInventory


// TODO: ---CREATE INVENTORY THUNK
export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    // TODO: EXTRA REDUCERS
    extraReducers: (builder) => { 
        builder
            .addCase(createInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createInventory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllInventoryByUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllInventoryByUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getAllInventoryByUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getInventory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateInventory.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateInventory.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(updateInventory.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = inventorySlice.actions
export default inventorySlice.reducer
