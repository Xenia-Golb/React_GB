import React, { useContext } from 'react'
import { FilterContext } from '../context/FilterContext';

function FilterToDo() {

    const { filter, setFilter } = useContext(FilterContext);

    function handleChange(e) {
        setFilter(e.target.value);
    }

    return (<>
        <select value={filter} onChange={handleChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
        </select>
    </>);
}

export default FilterToDo;