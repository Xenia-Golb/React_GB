import { useContext } from 'react';
import style from './Profile.module.css';
import { ThemeContext } from '../App';
function Profile() {
    const theme = useContext(ThemeContext);
    return (<div className={theme === 'white' ? `${style.white}` : `${style.black}`}>
        <hr />
        <h2>Profile</h2>
        <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eius, quibusdam sed accusamus sequi esse sunt qui dolores fuga consectetur!</p>
        <hr />
    </div>);
}

export default Profile;