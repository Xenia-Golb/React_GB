import { useState } from "react";
import { Button, TextField, List, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

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
    const deleteItem = (e) => {
        const newList = [...toDoList];
        newList.pop(e.target.value);
        setToDoList(newList);
    }
    return (<>
        <h1>ToDoList</h1>
        <TextField
            type="text"
            placeholder="Введите дело: "
            value={value}
            onChange={updateToDoList}
        />
        <Button onClick={addItem} variant="contained" color="primary">Добавить</Button>
        <List sx={{ margin: '0 auto', maxWidth: 360, bgcolor: 'background.paper' }}>
            {toDoList.map((value) => (
                <ListItem
                    key={value}
                    disableGutters
                >
                    <ListItemText primary={value} /><DeleteIcon onClick={deleteItem} />
                </ListItem>
            ))}
        </List>

    </>);
}

export default ToDoList;