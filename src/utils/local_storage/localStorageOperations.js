export const add_user_to_local_storage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const remove_user_from_local_storage = () => {
  localStorage.removeItem("user");
};

export const get_user_from_local_storage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
