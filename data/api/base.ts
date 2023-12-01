export const BASE_URL = 'http://localhost:8080/api';

async function getResponse<T>(
    url: string,
    method: string,
    body?: any,
    params?: any,
) {
    const queryParams = new URLSearchParams(params);
    const authToken = localStorage.getItem('TOKEN');

    console.log(url + queryParams)

    const response = await fetch(url + queryParams, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(body)
    });

    return response;
}

export async function getApi<T>(
    url: string,
    body?: any,
    params?: any,
) {
    return getResponse(url, 'GET', body, params);
}

export async function postApi<T>(
    url: string,
    body?: any,
    params?: any,
) {
    return getResponse(url, 'POST', body, params);
}

export async function putApi<T>(
    url: string,
    body?: any,
    params?: any,
) {
    return getResponse(url, 'PUT', body, params);
}
