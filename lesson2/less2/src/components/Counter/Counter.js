import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p className="comment">Кнопка кликкер</p>
            <h1>{count}</h1>
            <button onClick={updateCount}>click</button>
        </>
    );
}

export default Counter;