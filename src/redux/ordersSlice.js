import { createSlice } from '@reduxjs/toolkit'

const ordersSlice = createSlice({
    name: "orders",
    initialState: {

        dark: false,
    },

    reducers: {
        setDark: (state, action) => {
            state.dark = action.payload
        }
    }
})

export const { setDark } = ordersSlice.actions;
export default ordersSlice.reducer;