import { QUERY, CATEGORY, SORT, STARTINDEX } from "../types";

export const setQuery = (query) => {
  return {
    type: QUERY,
    payload: query,
  };
};

export const setCategory = (category) => {
  return {
    type: CATEGORY,
    payload: category,
  };
};

export const setSort = (sort) => {
  return {
    type: SORT,
    payload: sort,
  };
};

export const setStartIndex = (startIndex) => {
  return {
    type: STARTINDEX,
    payload: startIndex,
  };
};
