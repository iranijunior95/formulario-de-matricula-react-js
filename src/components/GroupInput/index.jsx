import './style.css';

function GroupInput(props) {
    return (
        <>
            <input 
                type={props.inputType} 
                name={props.nameInput} 
                id={props.nameInput}
            />
        </>
    );
}

export default GroupInput;