const TOKEN = "TOKEN";

export const _saveSession = (token) => {
    localStorage.setItem(TOKEN, token);
}

export const _getToken = () => {
    return localStorage.getItem(TOKEN);
}
