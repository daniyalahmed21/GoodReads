import axios from "axios";

const AXIOS_API_URL = import.meta.env.VITE_AXIOS_API_URL;


const instance = axios.create({
  baseURL: AXIOS_API_URL,
});

// console.log(instance)


export default instance;