import { BE_BASE_URL, getApi, postApi } from "data/api/base";

const GET_PAYMENT_REQUESTS_URL = `${BE_BASE_URL}/payments`;
const APPROVE_REQUEST_URL = `${BE_BASE_URL}/payments/approve`;
const REJECT_REQUEST_URL = `${BE_BASE_URL}/payments/reject`;

const getPaymentRequests = async(page:number = 1) => {
    const res = await getApi(GET_PAYMENT_REQUESTS_URL);
    if (!res.ok) {
        throw new Error("getPaymentRequests Error");
    }
    return await res.json();
}

const getPaymentRequestById = async(id: number) => {
    const res = await getApi(`${GET_PAYMENT_REQUESTS_URL}/${id}`);
    if (!res.ok) {
        throw new Error("getPaymentRequestById Error");
    }
    return await res.json();
}

const approveRequest = async (id: number) => {
    const res = await postApi(`${APPROVE_REQUEST_URL}/${id}`);
    if (!res.ok) {
        throw new Error("changeStatus Error");
    }
    return await res.json();
}

const rejectRequest = async (id: number) => {
    const res = await postApi(`${REJECT_REQUEST_URL}/${id}`);
    if (!res.ok) {
        throw new Error("changeStatus Error");
    }
    return await res.json();
}

export const paymentService = {
    getPaymentRequests,
    getPaymentRequestById,
    approveRequest,
    rejectRequest,
}