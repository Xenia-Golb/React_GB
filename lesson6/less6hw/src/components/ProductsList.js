import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../actions/productsAction';

function ProductsList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    return (<>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => dispatch(removeProduct(product.id))}>X</button>
                </li>
            ))}

        </ul>
    </>);

}

export default ProductsList;