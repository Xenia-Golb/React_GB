import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { addProduct } from '../reducers/productSlice';
import { deleteProduct } from '../reducers/productSlice';


function ProductsList() {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();


    return (
        <div>
            {
                products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        onDelete={() => {
                            dispatch(deleteProduct(product));
                        }}
                    />
                ))
            }



        </div>);

}

export default ProductsList;