import { SET_FILTER } from "../types/projectTypes";

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};