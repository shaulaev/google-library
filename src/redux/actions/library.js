import { GET_BOOKS, GET_MORE_BOOKS, STATUS } from "../types";

export const getBooks = (books) => {
  return {
    type: GET_BOOKS,
    payload: books,
  };
};

export const getMoreBooks = (books) => {
  return {
    type: GET_MORE_BOOKS,
    payload: books,
  };
};

export const status = (stat) => {
  return {
    type: STATUS,
    payload: stat,
  };
};
