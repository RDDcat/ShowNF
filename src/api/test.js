import axios from "axios";

const BASE_URL = "http://13.125.225.95:8080/"

export default {
    getTestDAO: function(){
        return axios.get(BASE_URL + 'test');
    },
    getTestDAOWithParam: function(id){
        return axios.get(BASE_URL + `test/${id}`);
    }
}