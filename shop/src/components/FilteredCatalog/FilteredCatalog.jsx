import "../Catalog/CatalogCards.css";
import '../Catalog/CatalogItem.css';
import { filterData } from "../../data/filterData";
import CatalogItem from "../Catalog/CatalogItem";
import "./FilteredCatalog.css";
import { useParams } from "react-router-dom";
import Pagination from "./Pagination";
import FilterForCatalog from "../FilterCatalog/FilterCatalog";
import { useEffect, useState } from "react";


function FilteredCatalog() {
    const [filteredProducts, setFilteredProducts] = useState(filterData);
    const [selectedSize, setSelectedSize] = useState("All");
    useEffect(() => {
        if (selectedSize === "All") {
            setFilteredProducts(filterData);
        } else {
            setFilteredProducts(
                filterData.filter((product) => product.size === selectedSize)
            );
        }
    }, [selectedSize]);

    const { pageNumber } = useParams();
    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productsPerPage = 9;
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    return (
        <section className="filtered-catalog center">
            <FilterForCatalog
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
            />
            <div className='catalog'>
                {currentProducts.map((item, index) => (
                    <CatalogItem
                        id={item.id}
                        key={index}
                        title={item.name}
                        img={item.img}
                        description={item.description}
                        price={item.price}
                        size={item.size}
                    />
                ))}
            </div>
            <Pagination totalProducts={filterData.length} productsPerPage={productsPerPage} currentPage={currentPage} />

        </section>
    );
}
export default FilteredCatalog;