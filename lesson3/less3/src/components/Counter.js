import Button from "./Button";
import { useState } from 'react';

function Counter() {
    const [value, setValue] = useState(0);
    const onIncrement = () => {
        setValue(value + 1);
    }
    const onDecrement = () => {
        if (value === 0) return;
        setValue(value - 1);
    }
    return (<>
        <p>Counter: {value}</p>
        <Button onClick={onIncrement} name={'+'} />
        <Button onClick={onDecrement} name={'-'} />
    </>);
}

export default Counter;