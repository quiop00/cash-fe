import { BE_BASE_URL, getApi, putApi } from "data/api/base"

const USER_URL = `${BE_BASE_URL}/users`;

const getUsers = async(page: number = 1) => {
    const response = await getApi(USER_URL);
    if (!response.ok) {
        localStorage.setItem('TOKEN', '');
        return {data: []};
    }
    return await response.json();
}

const getUserById = async(id: number) => {
    const response = await getApi(`${USER_URL}/` + id);
    if (!response.ok) {
        return {data: null};
    }
    return await response.json();
}

const blockUser = async (id: number) =>{
    const response = await putApi(`${USER_URL}/update-status/` + id);
    if (!response.ok) {
        throw new Error("Error");
    }
    return await response.json();
}

const changePassword = async(data: any) => {
    const response = await putApi(`${USER_URL}/change-password/`, data);
    if (!response.ok) {
        throw new Error("Error");
    }
    return await response.json();
}

export const userService = {
    getUsers,
    getUserById,
    blockUser,
    changePassword,
}