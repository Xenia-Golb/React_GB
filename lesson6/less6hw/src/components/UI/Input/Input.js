import classes from './Input.module.css';
function Input(props) {
    return (
        <input {...props} className={classes.myInput} />

    );
}

export default Input;