import CatalogItem from './CatalogItem';
import './CatalogCards.css';
import { catalogData } from '../../data/catalogData';
import { Link } from 'react-router-dom';


function CatalogCards() {
    return (<div className='container__catalog center'>
        <div className="catalog__tit">
            Fetured Items
        </div>
        <div className="catalog__par">Shop for items based on what we featured in this week</div>
        <div className='catalog'>
            {catalogData.map((item) => (
                <CatalogItem
                    key={item.id}
                    title={item.name}
                    img={item.img}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </div>
        <Link to="/catalog/" className="bottom__link">Browse All Product</Link>
    </div>);
}

export default CatalogCards;