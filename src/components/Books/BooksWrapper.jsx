import { useSelector } from "react-redux";
import { Book } from "./Book";
import { Loader } from "../ui/Loader/Loader";
import { useDispatch } from "react-redux";
import { getAllMoreBooks } from "../../redux/asyncActions/asyncLibrary";
import cl from "./Book.module.css";

export function BooksWrapper() {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);

  const { q, category, sort } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(
      getAllMoreBooks(q, category, sort, books && books.items.length + 1)
    );
  };

  return (
    <>
      <h2 className={cl.loadMore}>Total books: {books.totalItems}</h2>
      <div className={cl.books}>
        {status === "success" && books && books.items.length > 0 ? (
          books.items.map((item) => {
            return <Book key={item.id} book={item} />;
          })
        ) : (
          <Loader />
        )}
      </div>
      {status === "success" && (
        <h2 className={cl.loadMore} onClick={loadMore}>
          Load more
        </h2>
      )}
    </>
  );
}
