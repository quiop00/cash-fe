import { BE_BASE_URL, getApi } from "./base"

const USER_URL = `${BE_BASE_URL}/users`;

export const fetchUsers = async () => {
    return await getApi(USER_URL);
}