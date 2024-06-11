import { Link } from "react-router-dom";

function AboutPage() {
    return (<>
        <h1>О нас</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis, dolorum, quo. Aperiam, aspernatur, quaerat, voluptates, quidem quos quibusdam nihil quia dolorum.</p>
        <Link to={'/'}>Перейти на главную</Link>
    </>);
}

export default AboutPage;