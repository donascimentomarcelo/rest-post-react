export function setToken(token) {
    const tokenValue = token ? token : null;
    localStorage.setItem('token', JSON.stringify(tokenValue))
    return tokenValue;
}

export function getToken() {
    try {
        const serializedState = localStorage.getItem('token');
        if (serializedState === null) {
          return undefined;
        }
        return JSON.parse(serializedState);
      } catch (err) {
        return undefined;
      }
}

export function isAuthenticated() {
    return {
        type: 'LOGGED',
        payload: getToken() ? true : false,
    }
}