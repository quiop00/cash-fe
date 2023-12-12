import { BE_BASE_URL, deleteApi, getApi, postApi, putApi } from "data/api/base"

const NOTIFICATIONS_URL = `${BE_BASE_URL}/notifications/list`;
const GET_NOTIFICATION_URL = `${BE_BASE_URL}/notifications`;
const CREATE_NOTIFICATION_URL = `${BE_BASE_URL}/notifications`;
const UPDATE_NOTIFICATION_URL = `${BE_BASE_URL}/notifications`;
const DELETE_NOTIFICATION_URL = `${BE_BASE_URL}/notifications`;

const getNotifications = async (page: number = 1) => {
    const res = await getApi(NOTIFICATIONS_URL);
    if (!res.ok) {
        throw new Error("getNotifications Error");
    }
    return await res.json();
}

const getNotificationDetail = async (id: number) => {
    const res = await getApi(`${GET_NOTIFICATION_URL}/${id}`);
    if (!res.ok) {
        throw new Error("getNotificationDetail Error");
    }
    return await res.json();
}

const createNotification = async (notification: Notification) => {
    const res = await postApi(CREATE_NOTIFICATION_URL, notification);
    if (!res.ok) {
        throw new Error("createNotification Error");
    }
    return await res.json();
}

const updateNotification = async (id: number, notification: Notification) => {
    const res = await putApi(`${UPDATE_NOTIFICATION_URL}/${id}`, notification);
    if (!res.ok) {
        throw new Error("updateNotification Error");
    }
    return await res.json();
}

const deleteNotification = async (id: number) => {
    const res = await deleteApi(`${DELETE_NOTIFICATION_URL}/${id}`);
    if (!res.ok) {
        throw new Error("deleteNotification Error");
    }
    return await res.json();
}

export const notificationService = {
    getNotifications,
    getNotificationDetail,
    createNotification,
    updateNotification,
    deleteNotification,
}