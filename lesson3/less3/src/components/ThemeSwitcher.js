import Button from "./Button";
import { useState } from "react"

function ThemeSwitcher() {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return (<>
        <Button onClick={toggleTheme} name={'Поменяйте тему'} />
    </>);
}

export default ThemeSwitcher;