const TOKEN_KEY  = 'stakeria'

const getToken = () => localStorage.getItem(TOKEN_KEY)

const saveToken = (token) => localStorage.setItem(TOKEN_KEY, token)

const removeToken = () => localStorage.removeItem(TOKEN_KEY)

const isAuthenticated =  () => {
    
    return getToken()
}

export {
    getToken,
    saveToken,
    removeToken,
    isAuthenticated
}