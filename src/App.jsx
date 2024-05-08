import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { getAllBooks } from "./redux/asyncActions/asyncLibrary";
import { BooksWrapper } from "./components/Books/BooksWrapper";
import { Header } from "./components/ui/Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <BooksWrapper />
    </div>
  );
}

export default App;
