import { createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
    initialState: 'dark',
    name: 'theme',
    reducers: {
        set: (state, action) => action.payload,
    },
})

export const { set } = themeSlice.actions

export default themeSlice.reducer