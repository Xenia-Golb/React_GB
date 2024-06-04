import { useEffect, useState } from "react";


function Timer() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (<>
        <p className="comment">Необходимо создать таймер с динамическим обновлением каждую секунду:</p>
        <p>Текущее время:</p>
        <p> {time.toLocaleTimeString()}</p>
    </>);
}

export default Timer;