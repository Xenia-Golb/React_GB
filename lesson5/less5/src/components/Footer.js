import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import style from "./Profile.module.css";

function Footer() {
    const theme = useContext(ThemeContext);
    const [now, setNow] = useState(new Date().getFullYear());
    setInterval(() => {
        setNow(new Date().getFullYear());
    }, 1000)
    return (<footer className={theme === 'white' ? `${style.white}` : `${style.black}`}>
        <h1>Footer</h1>
        <p>Date: {now}</p>
    </footer>);
}

export default Footer;