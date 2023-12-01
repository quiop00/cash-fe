import { User } from "data/models/User";
import { BASE_URL, getApi, postApi } from "./base";

const REGISTER_URL = `${BASE_URL}/auth/register`;
const LOGIN_URL = `${BASE_URL}/auth/login`;

export const login = async (user: User) =>{
    return await getApi(LOGIN_URL, user);
}

export const register = async (user: User) => {
    return await postApi(REGISTER_URL, user);
}