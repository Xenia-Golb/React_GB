import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import Button from './UI/Button/Button';
import { removeProduct } from '../actions/productsAction';


function ProductsList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();
    console.log(products);

    return (
        <div>
            {products.map((product) => (
                <>
                    <Product key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}

                    />
                </>
            ))
            }

        </div>);

}

export default ProductsList;