<!-- 커뮤니티 페이지 -->
<template>
    <!-- 상단 -->
    <CommunityTop />

    <!-- 게시판 별 게시글 -->
    <ContentBoard 
        v-if="hot_data"
        :title="titles[0]"
        :data="hot_data"/>
    <ContentBoard 
        v-if="data"
        :title="titles[1]"
        :data="data[0]"/>
    <ContentBoard 
        v-if="data"
        :title="titles[2]"
        :data="data[1]"/>
    <ContentBoard 
        v-if="data"
        :title="titles[3]"
        :data="data[2]"/>
    <ContentBoard 
        v-if="data"
        :title="titles[4]"
        :data="data[3]"/>


    <FloatingIcon />


</template>
<script>
import CommunityTop from '@/components/CommunityPage/CommunityTop.vue'
import ContentBoard from '@/components/CommunityPage/ContentBoard.vue'
import FloatingIcon from '@/components/CommunityPage/FloatingIcon.vue'

import apiTest from '@/api/test';

export default{
    components: {
        CommunityTop, 
        ContentBoard,
        FloatingIcon,
    },
    data(){
        return {         
            titles: ["HOT", "도마뱀", "뱀", "개구리", "거북이"],
            hot_data:[],
            data:[[],[],[],[]],

        }
    },
    methods: {
        
    },
    beforeCreate() {
        // 핫게시판 데이터 가져오기
        apiTest.getHotPosts()
        .then(response=>{
            console.log("response : ", response);
            this.hot_data = response;
        })
        .catch(function (e){
            console.log(e);
        });

        const categories= ["REPTILE", "SNAKE", "FROG", "TURTLE"];
        // 게시물 조회
        for (let i = 0; i < categories.length; i++) {
            apiTest.getPosts(categories[i])
            .then(response=>{
                console.log("category : ", i);
                this.data[i] = response.data;
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

</style>