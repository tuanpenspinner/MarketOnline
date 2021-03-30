import axios from "axios";
import { isEmpty, join } from "lodash";
import { stringify } from "query-string";

function api() {
  // const token = getToken();

  const instance = axios.create({
    baseURL: "https://kadonfarm.herokuapp.com",
  });

  instance.interceptors.request.use((reqConfig) => {
    return reqConfig;
  });

  instance.interceptors.response.use(
    (response) => {
      return {
        ...response,
        data: response.data,
        httpCode: response.status,
      };
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}

/**
 * Make XMLHttpRequests with Axios instance.
 *
 * @param {String} url
 * @param {String} method
 * @param {Object} data
 * @param {Object} reqConfig
 *
 * @return
 */
export async function makeRequest(
  url,
  method = "GET",
  data = {},
  reqConfig = {}
) {
  let querryParams;
  let response = null;
  let urlGet;
  try {
    switch (method) {
      case "GET":
        querryParams = stringify(data);
        urlGet = isEmpty(querryParams) ? url : join([url, querryParams], "?");
        response = await api().get(urlGet, reqConfig);
        break;
      case "POST":
        response = await api().post(url, data, reqConfig);
        break;
      case "PUT":
        response = await api().put(url, data, reqConfig);
        break;
      case "DELETE":
        response = await api().delete(url, data, reqConfig);
        break;
      default:
        throw new Error("Invaild method.");
    }
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}
