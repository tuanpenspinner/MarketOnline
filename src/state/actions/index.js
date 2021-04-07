function actionCreator(key) {
  return {
    REQUEST: `${key}:REQUEST`,
    SUCCESS: `${key}:SUCCESS`,
    FAILURE: `${key}:FAIL`,
    REFRESH: `${key}:REFRESH`,
  };
}

// product action
export const GET_PRODUCT = actionCreator("GET_PRODUCT");
export const CREATE_PRODUCT = actionCreator("CREATE_PRODUCT");
export const UPDATE_PRODUCT = actionCreator("UPDATE_PRODUCT");
export const UPDATE_ACTIVE_PRODUCT = actionCreator("UPDATE_ACTIVE_PRODUCT");
export const UPDATE_HIGHLIGHT_PRODUCT = actionCreator("UPDATE_HIGHLIGHT_PRODUCT");
export const DELETE_PRODUCT = actionCreator("DELETE_PRODUCT");

// category action
export const GET_CATEGORY = actionCreator("GET_CATEGORY");
export const CREATE_CATEGORY = actionCreator("CREATE_CATEGORY");
export const UPDATE_CATEGORY = actionCreator("UPDATE_CATEGORY");
export const UPDATE_ACTIVE_CATEGORY = actionCreator("UPDATE_ACTIVE_CATEGORY");
export const DELETE_CATEGORY = actionCreator("DELETE_CATEGORY");

// blog action
export const GET_BLOG = actionCreator("GET_BLOG");
export const CREATE_BLOG = actionCreator("CREATE_BLOG");
export const UPDATE_BLOG = actionCreator("UPDATE_BLOG");
export const UPDATE_ACTIVE_BLOG = actionCreator("UPDATE_ACTIVE_BLOG");
export const DELETE_BLOG = actionCreator("DELETE_BLOG");

// blog action
export const GET_ORDER = actionCreator("GET_ORDER");
export const CREATE_ORDER = actionCreator("CREATE_ORDER");
export const UPDATE_ACTIVE_ORDER = actionCreator("UPDATE_ACTIVE_ORDER");
export const DELETE_ORDER = actionCreator("DELETE_ORDER");

// comment action
export const GET_CMT = actionCreator("GET_CMT");
export const CREATE_CMT = actionCreator("CREATE_CMT");
export const UPDATE_CMT = actionCreator("UPDATE_CMT");
export const UPDATE_ACTIVE_CMT = actionCreator("UPDATE_ACTIVE_CMT");
export const DELETE_CMT = actionCreator("DELETE_CMT");

//Web action
export const GET_PRODUCT_PAGE = actionCreator("GET_PRODUCT_PAGE");
export const GET_LIST_CATEGORY = actionCreator("GET_LIST_CATEGORY");
export const GET_LIST_PRODUCT = actionCreator("GET_LIST_PRODUCT");
export const GET_DETAIL_PRODUCT = actionCreator("GET_DETAIL_PRODUCT");
export const SEND_PRODUCT_COMMENT = actionCreator("SEND_PRODUCT_COMMENT");
export const GET_LIST_BLOG = actionCreator("GET_LIST_BLOG");
export const GET_DETAIL_BLOG = actionCreator("GET_DETAIL_BLOG");
export const GET_LIST_COMMUNITY = actionCreator("GET_LIST_COMMUNITY");
export const GET_DETAIL_COMMUNITY = actionCreator("GET_DETAIL_COMMUNITY");
export const SET_PRODUCT_CART = actionCreator("SET_PRODUCT_CART");
export const ORDER_PRODUCT = actionCreator("ORDER_PRODUCT");
