import makeRequest, { HTTP_METHOD } from "../";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  uploadImage: async (data) => {
    const result = await makeRequest(
      "https://kadonfarm-upload.herokuapp.com/image/upload",
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
