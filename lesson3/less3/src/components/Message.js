import { PropTypes } from 'prop-types';

function Message({ id, text }) {
    return (<>
        <p>id:{id}</p>
        <p>text:{text}</p>
    </>);
}
Message.propTypes = {
    // id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
}
export default Message;