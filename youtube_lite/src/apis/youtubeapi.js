import axios from "axios";
const KEY = "AIzaSyCfbeP4qfwV96fPLY_lhklKVzXG-r13XLY";


export default axios.create({
    baseURL : "https://www.googleapis.com/youtube/v3/",
    params  : {
        part: "snippet",
        maxResult : 100,
        key : KEY,
    },
});