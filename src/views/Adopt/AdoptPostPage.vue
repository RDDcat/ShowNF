<!-- 분양글 조회 페이지 -->
<template>    
    <!-- 상단 -->
    <div class="top">
        <img class="top-back" src="@/assets/logo.png" @click="this.$router.go(-1);">
        <div class="top-title">분양게시글</div>
        <div class="balance"></div>
    </div>

    <!-- 이미지 배너 -->
    <div class="images">
        <div class="image">
        </div>
    </div>

    <!-- 조회 게시글 내용 -->


    <!-- 하단 플로팅 바 (좋아요, 채팅하기) -->

</template>
<script>
import apiTest from '@/api/test';

export default {
    components: {

    },
    data(){
        return {
            testPostId: "",
            data: [],
        }
    },
    methods: {

    },
    beforeCreate(){
        apiTest.getAdoptPostDAO(this.testPostId)
        .then(response=>{
            console.log("getAdoptPostDAO : ", response);
            this.data = response.data;
        })
        .catch(function (e){
            console.log(e);
        });
    }
}
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

.images{
    width: 100vw;
    height: 300px;
    display: flex;
    flex: wrap;
}
.image{
    
}
</style>