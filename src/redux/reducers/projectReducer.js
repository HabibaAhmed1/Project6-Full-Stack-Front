import { SET_FILTER } from "../types/projectTypes";

const initialState = {
  filter: "All",
};

const projectReducer = (
  state = initialState,
  action
) => {

  switch (action.type) {

    case SET_FILTER:

      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default projectReducer;