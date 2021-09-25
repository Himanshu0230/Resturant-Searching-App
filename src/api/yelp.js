import axios from "axios";

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer zpjwESjYV0ATDf3FlXsOtHRSzH386wmRmvhghJ4K_Qz0dnVYjH-A51dmCzLXjCB_quNpiDkvXTuid8-JKOx0ni62tSSvbJrPRK-SolncJd_ExVCyIlJOBfKMd6kKYXYx'
    }
});