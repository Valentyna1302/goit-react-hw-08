import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
