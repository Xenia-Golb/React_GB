import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../components/ToogleThemeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
})