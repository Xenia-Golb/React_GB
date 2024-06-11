import './temperatureConverter.css';
import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";


function TemperatureConverter() {
    const [text, setText] = useState();
    const [show, setShow] = useState(false);
    const [far, setFar] = useState();
    const [cel, setCel] = useState();


    const printTxt = (e) => {
        setText(e.target.value)
    }
    const converTempInFar = () => {
        let far = Number((text * 9 / 5) + 32);
        setShow(true);
        setFar(far);
    };
    const converTempInCel = () => {
        let cel = Number((text - 32) * 5 / 9);
        setShow(true);
        setCel(cel);
    };

    return (
        <div className="temperatureConverter">
            <h1>Temperature Converter</h1>
            <div>
                <TextField onChange={printTxt} id="filled-basic" label="Введите градусы по Цельсию" variant="outlined" fullWidth />
                <Button onClick={converTempInFar} variant="contained" color="primary">Конвертировать</Button>
                {show && (
                    <Typography variant="h6" align="center" gutterBottom>
                        Фаренгейты: {far}
                    </Typography>
                )}
            </div>
            <div>
                <TextField onChange={printTxt} label="Введите градусы по Фаренгейту" variant="outlined" fullWidth />
                <Button onClick={converTempInCel} variant="contained" color="primary">Конвертировать</Button>
                {show && (
                    <Typography variant="h6" align="center" gutterBottom>
                        Цельсия:  {cel}
                    </Typography>
                )}
            </div>

        </div>);
}

export default TemperatureConverter;