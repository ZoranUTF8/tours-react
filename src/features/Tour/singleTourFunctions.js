import customFetch from "../../utils/axios/customFetch";

export const singleTourData = async (slug, thunkApi) => {
  try {
    const response = await customFetch.post(`tours/${slug}`);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
