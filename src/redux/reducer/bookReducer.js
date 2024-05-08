import { GET_BOOKS, GET_MORE_BOOKS, STATUS } from "../types";

const initialStore = {
  books: "",
  status: "success",
};

export const bookReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, books: action.payload, status: "success" };
    case GET_MORE_BOOKS:
      if (action.payload.totalItems > 0) {
        return {
          ...state,
          books: {
            ...state.books,
            items: [...state.books.items, ...action.payload.items],
          },
          status: "success",
        };
      } else {
        return {
          ...state,
          status: "success",
        };
      }

    case STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
