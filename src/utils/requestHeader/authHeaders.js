export const authHeader = (thunkAPI) => {
  return {
    headers: {
      authorization: `Bearer ${thunkAPI.getState().user.token}`,
    },
  };
};

export default authHeader;
