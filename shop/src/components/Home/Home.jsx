import home from "../../img/Home.svg";
import "./Home.css";

function Home() {
    return (<div className="home center">
        <img src={home} alt="" />
        <h1 className="home__text">THE BRAND <br />
            <span> OF LUXERIOUS</span>
            <span> FASHION</span>
        </h1>

    </div>);
}

export default Home;