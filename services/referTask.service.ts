import { BE_BASE_URL, deleteApi, getApi } from "data/api/base"
import { ReferTask } from "data/models/ReferTask";

const GET_REFER_TASKS_URL = `${BE_BASE_URL}/refers/list`;
const GET_REFER_TASK_URL = `${BE_BASE_URL}/refers`;
const CREATE_REFER_TASK_URL = `${BE_BASE_URL}/refers/`;
const UPDATE_REFER_TASK_URL = `${BE_BASE_URL}/refers`;
const DELETE_REFER_TASK_URL = `${BE_BASE_URL}/refers`;

const getReferTasks = async() => {
    const res = await getApi(GET_REFER_TASKS_URL);
    if (!res.ok) {
        throw new Error("getNotifications Error");
    }
    return await res.json();
}

const getReferTaskById = async(id: number) => {
    const res = await getApi(`${GET_REFER_TASK_URL}/${id}`);
    if (!res.ok) {
        throw new Error("getNotifications Error");
    }
    return await res.json();
}

const createReferTask = async(referTask: ReferTask) => {
    const res = await getApi(CREATE_REFER_TASK_URL, referTask);
    if (!res.ok) {
        throw new Error("getNotifications Error");
    }
    return await res.json();
}

const updateReferTask = async(referTask: ReferTask) => {
    const res = await getApi(`${UPDATE_REFER_TASK_URL}`, referTask);
    if (!res.ok) {
        throw new Error("getNotifications Error");
    }
    return await res.json();
}

const deleteReferTask = async(id: number) => {
    const res = await deleteApi(`${DELETE_REFER_TASK_URL}/${id}`);
    if (!res.ok) {
        throw new Error("deleteNotification Error");
    }
    return await res.json();
}


export const referTaskService = {
    getReferTasks,
    getReferTaskById,
    createReferTask,
    updateReferTask,
    deleteReferTask,
}