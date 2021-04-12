import makeRequest, { HTTP_METHOD } from "../";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  uploadImage: async (data) => {
    const result = await makeRequest(
      "http://40.71.178.144:3001/image/upload",
      HTTP_METHOD.POST,
      data,
      {
        // prettier-ignore
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': "",
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return result;
  },
};
