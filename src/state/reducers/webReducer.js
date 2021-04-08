import * as types from "../actions";

const initState = {
  listProductPage: [],
  isLoading: false,
  listProduct: [],
  detailProduct: [],
  listCategory: [],
  listBlog: [],
  detailBlog: [],
  newestBlog: [],
  listProductCart: [],
  listCommunity: [],
  detailCommunity: [],
  httpCodeSendComment: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initState, { type, payload }) {
  switch (type) {
    //Trang home
    case types.GET_PRODUCT_PAGE.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_PRODUCT_PAGE.SUCCESS:
      return { ...state, listProductPage: payload.data.responseData, isLoading: false };
    case types.GET_PRODUCT.FAILURE:
      return { ...state, isLoading: false };
    //Lấy danh sách category
    case types.GET_LIST_CATEGORY.REQUEST:
      return { ...state };
    case types.GET_LIST_CATEGORY.SUCCESS:
      return { ...state, listCategory: payload.data };
    case types.GET_LIST_CATEGORY.FAILURE:
      return { ...state };
    //Lấy danh sách sản phẩm
    case types.GET_LIST_PRODUCT.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_LIST_PRODUCT.SUCCESS:
      return { ...state, listProduct: payload.data, isLoading: false };
    case types.GET_LIST_PRODUCT.FAILURE:
      return { ...state, isLoading: false };
    //Chi tiết sản phẩm
    case types.GET_DETAIL_PRODUCT.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_DETAIL_PRODUCT.SUCCESS:
      return { ...state, detailProduct: payload.data, isLoading: false };
    case types.GET_DETAIL_PRODUCT.FAILURE:
      return { ...state, isLoading: false };
    //Send comment
    case types.SEND_PRODUCT_COMMENT.REQUEST:
      return { ...state };
    case types.SEND_PRODUCT_COMMENT.SUCCESS:
      return { ...state, httpCodeSendComment: payload.httpCode };
    case types.SEND_PRODUCT_COMMENT.FAILURE:
      return { ...state, httpCodeSendComment: payload.httpCode };
    //Danh sách blog
    case types.GET_LIST_BLOG.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_LIST_BLOG.SUCCESS:
      return { ...state, listBlog: payload.data.items, newestBlog: payload.data.newestBlog, isLoading: false };
    case types.GET_LIST_BLOG.FAILURE:
      return { ...state, isLoading: false };
    //Chi tiết blog
    case types.GET_DETAIL_BLOG.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_DETAIL_BLOG.SUCCESS:
      return { ...state, detailBlog: payload.data.items, newestBlog: payload.data.newestBlog, isLoading: false };
    //Danh sách cộng đồng
    case types.GET_LIST_COMMUNITY.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_LIST_COMMUNITY.SUCCESS:
      return { ...state, listCommunity: payload.data, isLoading: false };
    case types.GET_LIST_COMMUNITY.FAILURE:
      return { ...state, isLoading: false };
    //Chi tiết cộng đồng
    case types.GET_DETAIL_COMMUNITY.REQUEST:
      return { ...state, isLoading: true };
    case types.GET_DETAIL_COMMUNITY.SUCCESS:
      return { ...state, detailCommunity: payload.data, isLoading: false };
    case types.GET_DETAIL_COMMUNITY.FAILURE:
      return { ...state, isLoading: false };
    //Thêm giỏ hàng
    case types.SET_PRODUCT_CART.SUCCESS:
      return { ...state, listProductCart: payload.data };
    //Đặt hàng
    case types.ORDER_PRODUCT.REQUEST:
      return { ...state };
    case types.ORDER_PRODUCT.SUCCESS:
      return { ...state, detailCommunity: payload.data };
    case types.ORDER_PRODUCT.FAILURE:
      return { ...state };
    //Gửi liên hệ
    case types.SEND_CONTRACT.REQUEST:
      return { ...state };
    case types.SEND_CONTRACT.SUCCESS:
      return { ...state };
    case types.SEND_CONTRACT.FAILURE:
      return { ...state };
    //Đăng kí nhận thông báo
    case types.REGISTER_NOTIFICATION.REQUEST:
      return { ...state };
    case types.REGISTER_NOTIFICATION.SUCCESS:
      return { ...state };
    case types.REGISTER_NOTIFICATION.FAILURE:
      return { ...state };
    default:
      return state;
  }
}
