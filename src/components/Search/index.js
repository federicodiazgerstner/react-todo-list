import './style.css';

function Search(props) {
  function handleChange(e) {
    const { value } = e.target;

    props.handleCallback(value);
  }

  function handleEnter(e) {
    const { keyCode } = e;

    if (keyCode === 13) {
      props.handleKey(keyCode);
    }
  }
  return (
    <input
      onChange={handleChange}
      onKeyDown={handleEnter}
      value={props.value}
      placeholder="Inserte una tarea..."
    ></input>
  );
}

export default Search;
