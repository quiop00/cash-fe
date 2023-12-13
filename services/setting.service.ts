import { BE_BASE_URL, getApi, putApi } from "data/api/base";

const SETTING_URL = `${BE_BASE_URL}/settings`;

const getRewardSetting = async() => {
    const res = await getApi(`${SETTING_URL}/reward`);
    if (!res.ok) {
        throw new Error("getRewardSetting error");
    }
    return await res.json();
}

const updateReward = async(data: any) => {
    const res = await putApi(`${SETTING_URL}/reward`, data);
    if (!res.ok) {
        throw new Error("updateReward error");
    }
    return await res.json();
}

const getOfferwallSetting = async() => {
    const res = await getApi(`${SETTING_URL}/offerwall`);
    if (!res.ok) {
        throw new Error("getOfferwallSetting error");
    }
    return await res.json();
}

const updateOfferwallSetting = async(data: any) => {
    const res = await putApi(`${SETTING_URL}/offerwall`, data);
    if (!res.ok) {
        throw new Error("updateOfferwallSetting error");
    }
    return await res.json();
}

const getSecureSetting = async() => {
    const res = await getApi(`${SETTING_URL}/secure`);
    if (!res.ok) {
        throw new Error("getSecureSetting error");
    }
    return await res.json();
}

const updateSecureSetting = async(data: any) => {
    const res = await putApi(`${SETTING_URL}/secure`, data);
    if (!res.ok) {
        throw new Error("updateSecureSetting error");
    }
    return await res.json();
}

export const settingService = {
    getRewardSetting,
    updateReward,
    getOfferwallSetting,
    updateOfferwallSetting,
    getSecureSetting,
    updateSecureSetting,
}