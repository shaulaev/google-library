import axios from "axios";
import { getBooks, status } from "../actions/library";
import { getMoreBooks } from "../actions/library";

const url = "https://www.googleapis.com/books/v1/volumes";

export const getAllBooks = (
  query = "",
  category = "",
  sort = "relevance",
  startIndex = 0
) => {
  return (dispatch) => {
    dispatch(status("pending"));

    axios
      .get(url, {
        params: {
          q: `intitle:${query}+subject:${category}` || '""',
          orderBy: sort,
        },
      })
      .then((res) => {
        dispatch(getBooks(res.data));
      })
      .catch((error) => {
        dispatch(status("error"));
        console.error("Error fetching books:", error);
      });
  };
};

export const getAllMoreBooks = (
  query = "",
  category = "",
  sort = "relevance",
  startIndex = 0
) => {
  return (dispatch) => {
    axios
      .get(url, {
        params: {
          q: `intitle:${query}+subject:${category}` || '""',
          orderBy: sort,
          startIndex: startIndex,
        },
      })
      .then((res) => {
        dispatch(getMoreBooks(res.data));
      })
      .catch((error) => {
        dispatch(status("error"));
        console.error("Error fetching books:", error);
      });
  };
};
