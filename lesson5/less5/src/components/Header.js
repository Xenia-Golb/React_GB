import { useContext } from "react";
import { ThemeContext, UserContext } from "../App";
import style from "./Profile.module.css"

function Header() {
    const theme = useContext(ThemeContext);
    const name = useContext(UserContext)
    return (<>
        <header className={theme === 'white' ? `${style.white}` : `${style.black}`}>
            <h1>Header</h1>
            <div>Hello {name}</div>
        </header>

    </>);
}

export default Header;