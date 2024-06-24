import CatalogItem from './CatalogItem';
import './CatalogCards.css'
import c1 from '../../img/c1.png';
import c2 from '../../img/c2.png';
import c3 from '../../img/c3.jpg';
import c4 from '../../img/c4.png';
import c5 from '../../img/c5.png';
import c6 from '../../img/c6.png';
import c7 from '../../img/c7.png';
import c8 from '../../img/c8.png';
import c9 from '../../img/c9.png';


function CatalogCards() {
    const catalogData = [
        {
            id: 1,
            img: c1,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 2,
            img: c2,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 3,
            img: c3,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 4,
            img: c4,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 5,
            img: c5,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 6,
            img: c6,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 7,
            img: c7,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 8,
            img: c8,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 9,
            img: c9,
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        }

    ];

    return (<div className='container__catalog center'>
        <div class="catalog__tit">
            Fetured Items
        </div>
        <div class="catalog__par">Shop for items based on what we featured in this week</div>
        <div className='catalog'>
            {catalogData.map((item) => (
                <CatalogItem
                    key={item.id}
                    img={item.img}
                    title={item.name}
                    description={item.description}
                    price={item.price}
                />
            ))}
        </div>
        <button class="bottom__link">Browse All Product</button>
    </div>);
}

export default CatalogCards;