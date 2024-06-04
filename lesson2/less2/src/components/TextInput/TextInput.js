import { useState } from "react";

function TextInput() {
    const [text, setText] = useState('');
    const handleChange = ({ target }) => {
        setText(target.value);
    };

    return (<>
        <p className="comment">Необходимо создать форму ввода и ниже поле, где текст будет меняться в реальном времени:</p>
        <input type="text" placeholder="Enter text" onChange={handleChange} />
        <p>Вы ввели: {text}</p>
    </>);
}

export default TextInput;