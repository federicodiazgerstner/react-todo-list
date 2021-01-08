function Task(props) {

    function handleClick() {
        const {pos} = props;
        props.onDelete(pos)
    }

    return (
        <li>{props.task}<button onClick={handleClick}>x</button></li>)
}

export default Task;