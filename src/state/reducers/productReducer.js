import * as types from "../actions";

const initState = {
  loading: false,
  error: false,
  httpCode: undefined,
  data: {
    list: [],
    total: 0,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.CATEGORIES.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.CATEGORIES.SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.CATEGORIES.FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
