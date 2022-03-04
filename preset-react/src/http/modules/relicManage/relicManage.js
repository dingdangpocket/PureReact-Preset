import axios from "axios"
// import "../../axios"
export default {
    getData(){
        return axios({
            method:"POST",
            url:"https://api.apiopen.top/getSingleJoke?sid=28654780",
        })
    },
    initData(){
        return axios({
            method:"POST",
            url:"https://api.apiopen.top/getSingleJoke?sid=28654780",
        })
    },
}
