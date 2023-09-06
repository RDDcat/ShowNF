import axios from "axios";

const BASE_URL = "http://13.125.225.95:8080/"

export default {
    // 테스트
    getTestDAO: function(){
        return axios.get(BASE_URL + 'test');
    },
    getTestDAOWithParam: function(id){
        return axios.get(BASE_URL + `test/${id}`);
    },
    
    // 스와이프
    getSwipeImage: function(){
        return axios.get(BASE_URL + `image`);
    },

}