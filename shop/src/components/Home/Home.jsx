import home from "../../img/Home.svg";
import "./Home.css";

function Home() {
    return (<div className="home center">
        <img src={home} alt="" />
        <h1 className="home__text">THE BRAND <br />
            <span1> OF LUXERIOUS</span1>
            <span2> FASHION</span2>
        </h1>

    </div>);
}

export default Home;