import Task from "../Task";

function Tasks(props) {

    function handleDelete(item) {
        props.deleted(item);
    }
    return (
        <ul>
            {props.tasks.map((task, key)=> {
                return <Task task={task} key={key} pos={key} onDelete={handleDelete}/>
            })}
        </ul>
    )
}

export default Tasks;