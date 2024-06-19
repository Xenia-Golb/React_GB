import { useState, useId } from 'react';
import { useDispatch } from 'react-redux';
import Input from './UI/Input/Input';
import Button from './UI/Button/Button';
import { addProduct } from '../reducers/productSlice';

function AddProduct() {
    const [product, setProduct] = useState({
        title: '',
        description: '',
        price: ''
    });
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        dispatch(addProduct(product));
        setProduct({
            title: '',
            description: '',
            price: ''
        });
    }

    return (
        <div className='inputProduct'>
            <Input
                type="text"
                value={product.title}
                onChange={(e) => setProduct({ ...product, title: e.target.value })}
                placeholder='Product name'
            />
            <Input
                type="text"
                value={product.description}
                onChange={(e) => setProduct({ ...product, description: e.target.value })}
                placeholder='Product description'
            />
            <Input
                type="number"
                value={product.price}
                onChange={(e) => setProduct({ ...product, price: e.target.value })}
                placeholder='Product price'
            />
            <Button onClick={handleAddProduct}>Add product</Button>
        </div>);
}

export default AddProduct;