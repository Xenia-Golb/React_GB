
// import { useState } from "react"
// import { Button, TextField, Typography } from "@mui/material";

// function TextDisplayForm() {
//     const [text, setText] = useState('');
//     const [show, setShow] = useState(false);
//     const clickHandler = () => {
//         setText(text)
//         setShow(true);
//     }

//     return (<>
//         <TextField
//             onChange={(e) => setText(e.target.value)}
//             value={text}
//             label="Введите текст"
//             fullWidth
//             variant="outlined"
//         />
//         <Button
//             onClick={clickHandler}
//             variant="contained"
//             color="primary"
//             fullWidth>Отобразить текст</Button>
//         {
//             show && (
//                 <Typography variant="h6" align="center" gutterBottom>
//                     {text}
//                 </Typography>
//             )}
//     </>);
// }

// export default TextDisplayForm;