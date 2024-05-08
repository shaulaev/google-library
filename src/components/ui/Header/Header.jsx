import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../../../redux/asyncActions/asyncLibrary";
import cl from "./Header.module.css";
import { setQuery, setCategory, setSort } from "../../../redux/actions/search";
import { categories } from "../../../data/categories";

export function Header() {
  const dispatch = useDispatch();
  const { q, category, sort } = useSelector((state) => state.search);

  const handleText = (e) => {
    dispatch(setQuery(e.target.value));
  };
  const handleCategory = (e) => {
    dispatch(setCategory(e.target.value));
  };
  const handleSort = (e) => {
    dispatch(setSort(e.target.value));
  };

  const handleSearch = () => {
    dispatch(getAllBooks(q, category, sort));
  };

  return (
    <div className={cl.search}>
      <h1>Books with Google Api</h1>
      <div className={cl.flex}>
        <input
          placeholder="Write books name"
          onChange={(e) => handleText(e)}
          value={q}
          type="text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className={cl.flex}>
        <div className={cl.categories}>
          <p>Categories</p>
          <select onChange={(e) => handleCategory(e)} name="categories" id="">
            <option value={""}>ALL</option>
            {categories.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className={cl.sorting}>
          <p>Sorting by</p>
          <select onChange={(e) => handleSort(e)} name="sorting" id="">
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}
