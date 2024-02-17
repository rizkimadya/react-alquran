//import axios
import axios from 'axios'

const Api = axios.create({
    
    //set endpoint API
    baseURL: import.meta.env.VITE_APP_BASEURL,

    //set header axios
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    }
});

export default Api