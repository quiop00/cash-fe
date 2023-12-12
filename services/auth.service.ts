import { AUTH_BASE_URL, getApi, postApi } from "data/api/base"
import { User } from "data/models/User"

const LOGIN_URL = `${AUTH_BASE_URL}/auth/admin/login`;

const login = async (user: User) => {
  const response = await postApi(LOGIN_URL, user);

  if (!response.ok) {
    throw new Error("Login fail");
  }

  const data = await response.json();
  if (data['data']) {
    localStorage.setItem('TOKEN', data['data']['token']);
  }
  return data;
}

export const authService = {
  login,
}