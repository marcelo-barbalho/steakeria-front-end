import axios from "axios";
import {getToken, removeToken, saveToken} from './auth'
import history from './history'

const localAccess = "http://localhost:3001";
const teste = 'https://steakeria.herokuapp.com'

const http = axios.create({
  baseURL:teste
  // baseURL: process.env.REACT_APP_TEST || localAccess
});

http.defaults.headers["Content-Type"] = "application/json";

if (getToken()) {
  http.defaults.headers['x-auth-token'] = getToken()
}

const interceptors = http.interceptors.response.use(
  response => response,
  error => {

    const {response :{status}} = error

     if (error.message === "Networt Error" && !error.message) {
       alert('Não detectada conexão com a internet.')
     }

     switch (status) {
       case 401:
         console.log('Invalid Token...')
         removeToken()
         history.push('/login')
         break;
     
       default:
         console.log(status, `Ocorreu um Erro. Erro:${status}`)
         break;
     }
     axios.interceptors.response.eject(interceptors)
     return Promise.reject(error)

  })


export default http
