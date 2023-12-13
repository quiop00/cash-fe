import { BE_BASE_URL, getApi, putApi } from "data/api/base";

const ADS_URL = `${BE_BASE_URL}/ads`;

const getAdsSetting = async() => {
    const res = await getApi(ADS_URL);
    if (!res.ok) {
        throw new Error("getAdsSetting error");
    }
    return await res.json();
}

const updateAdsSetting = async(data: any) => {
    const res = await putApi(ADS_URL, data);
    if (!res.ok) {
        throw new Error("updateAdsSetting error");
    }
    return await res.json();
}

export const adsService = {
    getAdsSetting,
    updateAdsSetting,
}