import axios from "axios";
import { isEmpty, join } from "lodash";
import { stringify } from "query-string";

function api() {
  // const token = getToken();

  const instance = axios.create({
    baseURL: "https://kadonfarm.herokuapp.com",
    // prettier-ignore
    headers: {
      // 'Authorization': `Bearer ${token}`,
      'Cache-Control': 'no-cache',
    },
  });

  instance.interceptors.request.use((reqConfig) => {
    let configOverride = reqConfig;

    return configOverride;
  });

  instance.interceptors.response.use(
    (response) => {
      let responseOverride = response;

      return responseOverride;
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
