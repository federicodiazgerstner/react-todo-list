import Input from "./components/Input";
import Tasks from "./components/Tasks";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleCallback(value) {
    setInputValue(value);;
  }

  function addTask() {
    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
    
  }

  function handleEnter(cap) {
    if (cap === 13) {
      addTask()
    }
  }

  function handleDelete(value) {
    const filtered = tasks.filter((task, key) => {
      return key !== value;
    });
    
    setTasks(filtered);
  }

  return (
    <div className="App">
      <Input onChange={handleCallback} value={inputValue} onEnter={handleEnter} />
      <Button onClick={addTask}/>
      <Tasks tasks={tasks} deleted={handleDelete}></Tasks>
    </div>
  );
}

export default App;
