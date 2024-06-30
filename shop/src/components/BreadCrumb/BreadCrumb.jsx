import { Link, useLocation } from "react-router-dom";
import "./BreadCrumb.css"

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    let breadcrumbPath = "";

    return (
        <div className="breadcrumbs">
            {pathnames.map((name, index) => {
                breadcrumbPath += `/${name}`;
                const isLast = index === pathnames.length - 1;
                console.log(pathnames, breadcrumbPath);

                return isLast ? (
                    <span className="bread__crumb__titl " key={breadcrumbPath}> {name}</span>
                ) : (
                    <span className="bread__crumb__titl " key={breadcrumbPath}>
                        {" "}
                        / <Link className="bread__crumb__link " to={breadcrumbPath}>{name}</Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;