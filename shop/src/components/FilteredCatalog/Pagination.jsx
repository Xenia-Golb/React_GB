import { Link } from "react-router-dom";

function Pagination({ totalProducts, productsPerPage, currentPage }) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    if (totalPages <= 1) {
        return null;
    }
    return (<div className='catalog__bot__numbers '>
        {
            Array.from({ length: totalPages }, (_, index) => (
                <Link
                    key={index}
                    to={`/catalog/${index + 1}`}

                >
                    {index + 1}
                </Link>
            ))
        }
    </div>);
}
export default Pagination;