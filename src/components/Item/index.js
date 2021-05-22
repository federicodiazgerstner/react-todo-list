import './style.css';

function Item(props) {
  const { value } = props;
  const { position } = props;

  const handleClick = () => {
    props.handleCallback(position);
  };

  return (
    <div className="item-container">
      <li>{value}</li>
      <button onClick={handleClick}>Borrar</button>
    </div>
  );
}

export default Item;
