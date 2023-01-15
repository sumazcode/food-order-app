import classes from './Input.module.css';

const Input = (props) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        { /* Make input field configurable by using the SPREAD operator
        All key value pairs are passed as part of props.input */ }
        <input {...props.input} />
    </div>;
};

export default Input;