const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      <span>Find contacts by name </span>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
