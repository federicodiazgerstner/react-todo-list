function Button(props) {
    function handleClick(){
        props.onClick();
    }


    return <button onClick={handleClick}>Agregar tarea</button>
}

export default Button;