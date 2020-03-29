export function setToken(token) {
    const tokenValue = token ? token : null;
    localStorage.setItem('token', tokenValue)
    return tokenValue;
}

export function getToken() {
    return localStorage.getItem('token');
}