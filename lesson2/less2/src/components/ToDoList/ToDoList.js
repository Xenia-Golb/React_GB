import { useState } from "react";

function ToDoList() {
    const [value, setValue] = useState("");
    const [toDoList, setToDoList] = useState([]);
    const addItem = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            return;
        }
        setToDoList([...toDoList, value]);
        setValue("");
    }
    const updateToDoList = ({ target }) => {
        setValue(target.value);
    }

    return (<>
        <p className="comment">Необходимо создать ToDoList c возможностью добавления дел</p>
        <h1>ToDoList</h1>
        <input
            type="text"
            placeholder="Введите дело: "
            value={value}
            onChange={updateToDoList}
            maxLength={10} />

        <button className="btn" onClick={addItem} >add</button>
        <ul>{
            toDoList.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
        </ul>


    </>);
}

export default ToDoList;