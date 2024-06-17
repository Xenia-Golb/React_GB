import { useState, useId } from 'react';
import { useDispatch } from 'react-redux';
function AddProduct() {
    const [text, setText] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const id = useId();

    const handleAddProduct = () => {
        dispatch(AddProduct(id, text, description, price));
        setText('');
        setDescription('');
        setPrice(0);
    }

    return (<div className='inputProduct'>
        <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Product name'
        />
        <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Product description'
        />
        <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Product price'
        />
        <button onClick={handleAddProduct}>Add product</button>
    </div>);
}

export default AddProduct;