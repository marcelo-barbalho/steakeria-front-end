import axios from "axios";
import {getToken} from './auth'

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

export default http
