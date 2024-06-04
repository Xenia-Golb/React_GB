import './Message.css'
function Message({ text }) {
    return (<div className="message">
        <h1 className="message__tit">Message</h1>
        <p>{text}</p>
    </div>);
}

export default Message;