import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented } from "./CounterSlice";

function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (<>
        <h2>{count}</h2>
        <button onClick={() => dispatch(incremented())}>+</button>
        <button onClick={() => dispatch(decremented())}>-</button>
    </>);
}

export default Counter;