function Input(props) {

    function handleChange(e) {
        const {value} = e.target;
        props.onChange(value);
    }

    function handleKeyDown(e) {
        const {keyCode} = e;
        props.onEnter(keyCode);
    }
    

    return <input type="text" value={props.value} onChange={handleChange} onKeyDown={handleKeyDown}/>
}

export default Input;