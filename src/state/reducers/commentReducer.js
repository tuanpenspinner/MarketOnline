import * as types from "../actions";

const initState = {
  loading: false,
  error: false,
  httpCode: undefined,
  data: {
    list: [],
    total: 0,
  },
  active: {
    loading: false,
    error: false,
    httpCode: undefined,
  },
  deleted: {
    loading: false,
    error: false,
    httpCode: undefined,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.GET_CMT.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_CMT.SUCCESS:
      return {
        ...state,
        loading: false,
        httpCode: payload.httpCode,
        data: {
          ...state.data,
          list: payload.data.items,
          total: payload.data.total,
        },
      };
    case types.GET_CMT.FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        httpCode: payload.httpCode,
      };

    case types.DELETE_CMT.REQUEST:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: true,
        },
      };
    case types.DELETE_CMT.SUCCESS:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_CMT.FAILURE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_CMT.REFRESH:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_ACTIVE_CMT.REQUEST:
      return {
        ...state,
        active: {
          ...state.active,
          loading: true,
        },
      };
    case types.UPDATE_ACTIVE_CMT.SUCCESS:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_CMT.FAILURE:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          error: payload.error,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_CMT.REFRESH:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    default:
      return state;
  }
}
