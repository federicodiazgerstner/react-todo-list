import './style.css';
import Item from '../Item';

function List(props) {
  const { values } = props;

  function handleClick(value) {
    const { handleCallback } = props;

    handleCallback(value);
  }

  return (
    <ul>
      {values.map((value, key) => (
        <Item
          value={value}
          key={key}
          position={key}
          handleCallback={handleClick}
        />
      ))}
    </ul>
  );
}

export default List;
