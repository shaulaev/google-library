import { QUERY, CATEGORY, SORT, STARTINDEX } from "../types";

const initialStore = {
  q: "",
  category: "",
  sort: "relevance",
  startIndex: 0,
};

export const searchReducer = (state = initialStore, action) => {
  switch (action.type) {
    case QUERY:
      return { ...state, q: action.payload };
    case CATEGORY:
      return { ...state, category: action.payload };
    case SORT:
      return { ...state, sort: action.payload };
    case STARTINDEX:
      return { ...state, startIndex: action.payload };
    default:
      return state;
  }
};
