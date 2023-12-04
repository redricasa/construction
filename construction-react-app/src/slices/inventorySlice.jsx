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
export const createInv = createAsyncThunk(
    'inv/create',
    async (inventoryData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await inventoryService.createInv(inventoryData, token)
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
export const getAllInvByUser = createAsyncThunk(
    'inv/get',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await inventoryService.getAllInvByUser(token)
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
export const updateInv = createAsyncThunk(
    'inv/update',
    
)

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
            .addCase(createInv.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createInv.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals.push(action.payload)
            })
            .addCase(createInv.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getAllInvByUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllInvByUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(getAllInvByUser.rejected, (state, action) => {
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
            .addCase(updateInv.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateInv.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.goals = action.payload
            })
            .addCase(updateInv.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = inventorySlice.actions
export default inventorySlice.reducer
