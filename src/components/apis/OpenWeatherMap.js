import Axios from "axios";


const KEY = "90ff367b18d766348e8b06101d8bd380";


export default Axios.create(
    {
        baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${KEY}`,
    }
);