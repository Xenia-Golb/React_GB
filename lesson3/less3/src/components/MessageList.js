import Message from "./Message";
const messages = [
    {
        id: 1, text: 'Привет, как дела?'
    },
    {
        id: 2, text: 'Это тестовое сообщение'
    },
    {
        id: 3,
        text: 'Это сообщение с длинным текстом, чтобы проверить, как будет выглядеть сообщение с длинным текстом'
    },
    {
        id: 4,
        text: 'Пока'
    },
    {
        id: 5,
        text: 'Спасибо'
    }
];
function MessageList() {
    return (
        <>
            {messages.map((message) => (
                <Message key={message.id} text={message.text} />
            ))}
        </>
    );
}

export default MessageList;