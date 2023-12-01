import { BASE_URL, getApi } from "./base"

const USER_URL = `${BASE_URL}/users`;

export const fetchUsers = async () => {
    return await getApi(USER_URL);
}