
import { useState } from 'react';
import './FilterCatalog.css';


function FilterForCatalog({ value, onChange }) {
    const [visibleFilter, setVisibleFilter] = useState('hidden');
    const handlerVisible = () => {
        setVisibleFilter(visibleFilter === 'hidden' ? 'visible' : 'hidden')
    }

    return (
        <div className='filterCatalog__container'>
            <div className="filter-block">
                <h3 onClick={handlerVisible} className='filter-block__title'> FILTER</h3>
                <div style={{ visibility: visibleFilter }}>
                    <h4 className='filter-block__heading'>CATEGORIES</h4>
                    <div className="filter-block__container-p">
                        <p className='filter-block__p'>Accessories</p>
                        <p className='filter-block__p'>Bags</p>
                        <p className='filter-block__p'>Denim</p>
                        <p className='filter-block__p'>Hoodies & Sweatshirts</p>
                        <p className='filter-block__p'>Jackets & Coats</p>
                    </div>
                    <h4 className='filter-block__heading'>BRAND</h4>
                    <h4 className='filter-block__heading'>DESIGNER</h4></div>
            </div>
            <div style={{ visibility: visibleFilter }} className="filterCatalog__size">
                <label style={{ paddingRight: '20px', color: '#6F6E6E' }}>SIZE:</label>
                <select name="size" id="size"
                    className="sort"
                    value={value}
                    onChange={onChange}
                >
                    <option value="All"></option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div style={{ visibility: visibleFilter }} className="filterCatalog__price">
                <label style={{ paddingRight: '20px', color: '#6F6E6E' }}>PRICE:</label>
                <input type="range" min="0" max="1000" />
            </div></div>);
}

export default FilterForCatalog;