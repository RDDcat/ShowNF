<!-- 커뮤니티 페이지 -->
<template>
    <!-- 상단 -->
    <div class="top">
        <div class="balance"></div>
        <div class="top-title">커뮤니티</div>
        <div class="balance"></div>
    </div>

    <!-- 게시판 별 게시글 -->
    <ContentBoard 
        :data="hot_data"/>
    <ContentBoard 
        :data="data[0]"/>
    <ContentBoard 
        :data="data[1]"/>
    <ContentBoard 
        :data="data[2]"/>
    <ContentBoard 
        :data="data[3]"/>


    <FloatingIcon />


</template>
<script>
import ContentBoard from '@/components/CommunityPage/ContentBoard.vue'
import FloatingIcon from '@/components/CommunityPage/FloatingIcon'

import apiTest from '@/api/test';

export default{
    components: {
        ContentBoard,
        FloatingIcon,
    },
    data(){
        return {            
            hot_data:[],
            
            data:[[],[],[],[]],

        }
    },
    methods: {
        
    },
    beforeMount(){
        // 핫게시판 데이터 가져오기
        apiTest.getHotPosts()
        .then(response=>{
            console.log("response : ", response);
            this.hot_data = response;
        })
        .catch(function (e){
            console.log(e);
        });

        const categories= ["FROG", "REPTILE", "SNAKE", "TURTLE"];
        // 게시물 조회
        for (let i = 0; i < categories.length; i++) {
            apiTest.getPosts(categories[i])
            .then(response=>{
                console.log("category : ", i);
                this.data[i] = response;
            })
            .catch(function (e){
                console.log(e);
            });
        }
        
        console.log("data : ", this.data);
    }
};
</script>
<style scoped>
.top-back{
    width: 24px;
    margin: 4px;
}
.top{
    display: flex;
    height: 40px;
}
.top-title{
    font-size: 18px;
    margin: auto;
}
.balance{
    width: 24px;
    margin: 4px;
}


</style>