import {createSlice} from '@reduxjs/toolkit'



const storedUserInfo = localStorage.getItem('userInfo');
const initialState = {
    userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
});
// calling clearCredentials/setCredentials is an action and reducer when it changes the state
export const {setCredentials, logout} = authSlice.actions;
export default authSlice.reducer;