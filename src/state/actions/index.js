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
