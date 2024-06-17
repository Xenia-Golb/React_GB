import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { set } from './ToogleThemeSlice'
import styles from './index.module.css'




const ToogleTheme = () => {
    const theme = useSelector((state) => state.theme)
    const dispatch = useDispatch()
    const handleChange = () => {
        const next = theme === 'dark' ? 'light' : 'dark'
        setTimeout(() => {
            dispatch(set(next))
        }, 700)

    }

    return (<>
        <div className={theme === 'dark' ? styles.dark : styles.light}>
            <h1>Тёмная тема в React с помощью Redux-toolkit</h1>
            <button className={theme === 'dark' ? styles.darkBtn : styles.lightBtn} onClick={handleChange}>Поменять тему</button>
        </div>
    </>

    )
}
export const { theme } = ToogleTheme;
export default ToogleTheme;