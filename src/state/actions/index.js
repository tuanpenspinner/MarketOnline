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
export const DELETE_PRODUCT = actionCreator("DELETE_PRODUCT");

// category action
export const GET_CATEGORY = actionCreator("GET_CATEGORY");
export const CREATE_CATEGORY = actionCreator("CREATE_CATEGORY");
export const UPDATE_CATEGORY = actionCreator("UPDATE_CATEGORY");
export const UPDATE_ACTIVE_CATEGORY = actionCreator("UPDATE_ACTIVE_CATEGORY");
export const DELETE_CATEGORY = actionCreator("DELETE_CATEGORY");

//Web action
export const GET_PRODUCT_PAGE = actionCreator("GET_PRODUCT_PAGE");
export const GET_LIST_CATEGORY = actionCreator("GET_LIST_CATEGORY");
export const GET_LIST_PRODUCT = actionCreator("GET_LIST_PRODUCT");
export const GET_DETAIL_PRODUCT = actionCreator("GET_DETAIL_PRODUCT");
export const SEND_PRODUCT_COMMENT = actionCreator("SEND_PRODUCT_COMMENT");
export const GET_LIST_BLOG = actionCreator("GET_LIST_BLOG");
export const GET_DETAIL_BLOG = actionCreator("GET_DETAIL_BLOG");
