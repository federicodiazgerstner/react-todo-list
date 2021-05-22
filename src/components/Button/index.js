import './style.css';
function Button(props) {
  function handleClick() {
    props.handleCallback();
  }
  return <button onClick={handleClick}>{props.name}</button>;
}

export default Button;
