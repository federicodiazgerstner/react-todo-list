import './reset.css';
import './App.css';
import Search from './components/Search';
import Button from './components/Button';
import List from './components/List';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChange(value) {
    setInputValue(value);
  }

  function addTask() {
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  function handleEnter(value) {
    if (inputValue !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  }

  function handleDelete(value) {
    console.log(value);

    setTasks(
      tasks.filter((task, key) => {
        return key !== value;
      })
    );
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <Search
          handleCallback={handleChange}
          value={inputValue}
          handleKey={handleEnter}
        />
        <Button handleCallback={addTask} name="Agregar" />
      </div>
      <div className="list-container">
        <List values={tasks} handleCallback={handleDelete} />
      </div>
    </div>
  );
}

export default App;
