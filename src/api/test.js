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

    // 분양
    // 분양게시글 (인데 당장은 커뮤니티 게시글)
    getAdoptPostDAO: function(postId){
        return axios.get(BASE_URL + `post/` + postId);
    },

    // 커뮤니티
    // 커뮤티니 게시글 전체 조회
    // 핫게시판 조회
    getHotPosts: function(){
        return axios.get(BASE_URL + `post/hot`);
    },
    // 커뮤니티 카테고리별 조회
    getPosts: function(category){
        console.log(BASE_URL + `post/category/` + category);
        return axios.get(BASE_URL + `post/category/` + category);
    },

    // 커뮤니티 게시글 개별 조회
    getPost: function(postId){
        return axios.get(BASE_URL + `post/` + postId);
    },

    // 스와이프
    getSwipeImage: function(page){
        if(!page){page = 0;}
        return axios.get(BASE_URL + `image` + '?page='+ page);
    },

}