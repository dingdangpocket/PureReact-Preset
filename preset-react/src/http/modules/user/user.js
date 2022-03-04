import axios from "axios"
// import "../../axios"
export default {
    userData(){
        return axios({
            method:"POST",
            url:"https://api.apiopen.top/getSingleJoke?sid=28654780",
        })
    },
}