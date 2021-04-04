import * as types from "../actions";

const initState = {
  loading: false,
  error: false,
  httpCode: undefined,
  data: {
    list: [],
    total: 0,
  },
  created: {
    loading: false,
    error: false,
    httpCode: undefined,
  },
  updated: {
    loading: false,
    error: false,
    httpCode: undefined,
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
    case types.GET_BLOG.REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_BLOG.SUCCESS:
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
    case types.GET_BLOG.FAILURE:
      return {
        ...state,
        loading: false,
      };

    case types.CREATE_BLOG.REQUEST:
      return {
        ...state,
        created: {
          ...state.created,
          loading: true,
        },
      };
    case types.CREATE_BLOG.SUCCESS:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_BLOG.FAILURE:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.CREATE_BLOG.REFRESH:
      return {
        ...state,
        created: {
          ...state.created,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_BLOG.REQUEST:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: true,
        },
      };
    case types.UPDATE_BLOG.SUCCESS:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_BLOG.FAILURE:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_BLOG.REFRESH:
      return {
        ...state,
        updated: {
          ...state.updated,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.DELETE_BLOG.REQUEST:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: true,
        },
      };
    case types.DELETE_BLOG.SUCCESS:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_BLOG.FAILURE:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.DELETE_BLOG.REFRESH:
      return {
        ...state,
        deleted: {
          ...state.deleted,
          loading: false,
          httpCode: undefined,
          error: false,
        },
      };

    case types.UPDATE_ACTIVE_BLOG.REQUEST:
      return {
        ...state,
        active: {
          ...state.active,
          loading: true,
        },
      };
    case types.UPDATE_ACTIVE_BLOG.SUCCESS:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_BLOG.FAILURE:
      return {
        ...state,
        active: {
          ...state.active,
          loading: false,
          httpCode: payload.httpCode,
        },
      };
    case types.UPDATE_ACTIVE_BLOG.REFRESH:
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
