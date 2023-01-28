import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const picid = uuidv4();

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
// axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: 'https://xxx/api',
  timeout: 10000,
});

api.interceptors.response.use(
  (res) => {
    console.log(res);
    return Promise.resolve(res);
  },
  (err) => {
    Promise.reject(err);
  },
);

export default api;
export { axios };
