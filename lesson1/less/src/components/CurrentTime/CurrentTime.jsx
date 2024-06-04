import './CurrentTime.css';
function CurrentTime() {
    const time = new Date().toLocaleTimeString();
    const goodDay = (time) => {
        if (time < 12 && time > 24) {
            return <h1 className='tit'>Good Morning! Now: {time}</h1>
        } else if (time > 12 && time < 18) {
            return <h1 className='tit'>Good Afternoon! Now: {time}</h1>
        } else {
            return <h1 className='tit'>Good Evening! Now: {time}</h1>
        }
    }

    return (<>
        <h2 className='tit'>{new Date().toLocaleDateString()}</h2>
        {goodDay(time)}

    </>);
}


export default CurrentTime;