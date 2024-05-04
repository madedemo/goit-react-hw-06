import css from "./SearchBox.module.css";

const SearchBox = ({ onChangeFilter }) => {
  const handleChange = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name..."
        onChange={handleChange}
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;

