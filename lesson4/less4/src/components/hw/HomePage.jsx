import { Link } from "react-router-dom";

function HomePage() {
    return (<>
        <h1>главная страница</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis, dolorum, quo. Aperiam, aspernatur, quaerat, voluptates, quidem quos quibusdam nihil quia dolorum.</p>
        <Link to={'/about/'}>Перейти на страницу "О нас"</Link>
    </>);
}

export default HomePage;