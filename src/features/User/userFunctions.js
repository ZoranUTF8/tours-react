import customFetch from "../../utils/axios/customFetch";

export const registerUserFunc = async (user, thunkApi) => {
  try {
    const response = await customFetch.post("auth/register", user);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserFunc = async (user, thunkApi) => {
  try {
    const response = await customFetch.post(`auth/login`, user);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data.msg);
  }
};
