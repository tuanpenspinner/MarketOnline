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
