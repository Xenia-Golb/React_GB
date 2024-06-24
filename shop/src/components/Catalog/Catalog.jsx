import CatalogItem from './CatalogItem';
import c1 from '../../img/c1.png';
import c2 from '../../img/c2.png';
import c3 from '../../img/c3.jpg';
import c4 from '../../img/c4.png';
import c5 from '../../img/c5.png';
import c6 from '../../img/c6.png';
import c7 from '../../img/c7.png';
import c8 from '../../img/c8.png';


function Catalog() {
    const catalogData = [
        {
            id: 1,
            // url: { c1 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 2,
            // url: { c2 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 3,
            // url: { c3 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 4,
            // url: { c4 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 5,
            // url: { c5 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 6,
            // url: { c6 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 7,
            // url: { c7 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        },
        {
            id: 8,
            // url: { c8 },
            name: "ELLEXY X MO CAPSULE",
            description: "Mango People T-shirt",
            price: 52
        }
    ]

    return (<div className="catalog">
        {catalogData.map((item) => (
            <CatalogItem
                key={item.id}
                // img={item.img}
                title={item.name}
                description={item.description}
                price={item.price}
            />
        ))}
    </div>);
}

export default Catalog;