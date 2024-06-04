import { useState } from "react";
import './CommentsList.css'

function CommentsList() {
    const [value, setValue] = useState("");
    const [CommentList, setCommentList] = useState([]);
    const addItem = (e) => {
        e.preventDefault();
        if (!value.trim()) {
            return;
        }
        setCommentList([...CommentList, value]);
        setValue("");
    }
    const updateCommentList = ({ target }) => {
        setValue(target.value);
    }
    const deleteItem = (index) => {
        const newList = [...CommentList];
        newList.splice(index, 1);
        setCommentList(newList);
    }
    return (<div className="comment-list">
        <p className="comment">
            Задача:
            Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.</p>

        <h1>CommentsList</h1>
        <ul className="ul-list">
            {
                CommentList.map((item, index) => {
                    return <div className="user">
                        <li key={index}>{item}</li>
                        <button className="btn" onClick={() => deleteItem(index)}>delete</button>
                    </div>

                })
            }
        </ul>
        <form className="add-comment">
            <input
                type="text"
                placeholder="Введите комментарий: "
                value={value}
                onChange={updateCommentList}
                maxLength={10} />
            <button className="btn" onClick={addItem}>add</button></form>
    </div>);
}

export default CommentsList;