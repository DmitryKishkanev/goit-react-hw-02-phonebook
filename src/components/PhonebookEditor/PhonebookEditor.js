const PhonebookEditor = ({ name, number, onHandleChange, onAddContact }) => {
  return (
    <div>
      <form onSubmit={onAddContact}>
        <label>
          <span>Name</span>
          <input
            value={name}
            onChange={onHandleChange}
            type="text"
            name="name"
            required
          />
        </label>

        <label>
          <span>Number</span>
          <input
            value={number}
            onChange={onHandleChange}
            type="tel"
            name="number"
            required
          />
        </label>

        <button type="submit" className="phonebook__button">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default PhonebookEditor;
