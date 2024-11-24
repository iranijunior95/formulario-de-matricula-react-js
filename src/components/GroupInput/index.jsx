import './style.css';

function GroupInput(props) {
    return (
        <>
            <input 
                type={props.inputType} 
                name={props.nameInput} 
                id={props.nameInput}
                disabled={props.disabled ? true : false}
                className={props.disabled ? 'disabled-input' : ''}
            />
        </>
    );
}

export default GroupInput;