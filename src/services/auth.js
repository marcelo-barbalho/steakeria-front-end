import http from '../config/config'

const auth = (data) => http.post('/auth', data)

export default auth