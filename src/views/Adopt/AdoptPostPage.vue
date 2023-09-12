<!-- 분양글 조회 페이지 -->
<template>    
    <!-- 상단 -->
    <div class="top">
        <i class="fa-solid fa-xmark fa-2x top-back" @click="this.$router.go(-1);"></i>
        <div class="top-title">분양게시글</div>
        <div class="balance"></div>
    </div>

    <!-- 이미지 배너 -->
    <div class="images">
        <div class="image">
            <img :src="content_img">
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
            testPostId: "0",
            data: [],
            content_img: "",
        }
    },
    methods: {

    },
    mounted(){
        apiTest.getAdoptPostDAO(this.testPostId)
        .then(response=>{
            this.data = response.data;
            console.log("this.data.content : ", this.data.content);
            var object1 = JSON.parse(this.data.content);
            console.log("this.object1 : ", object1);
            console.log("this.object1 : ", object1[0]);
            
            this.content_img = this.data.content[0].imageUrl;
            console.log("this.content_img : ", this.content_img);
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
.image img{

}
</style>