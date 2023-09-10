<!-- 스와이프 페이지 -->
<template>
    <div class="top">
        <div class="top-title">스와이프</div>
        <div class="mybox"><img src="assets/logo.png" @click="movePage('/storage/album')"></div>
    </div>
    <div class="content-imgtag">
        <img 
            v-for="(content, index) in contents" :key="index"
            v-show="contents_show[index]"
            :src="content.imageUrl"
            @click='swipeImage(index)'
            >
    </div>
</template>
<script>
import apiTest from '@/api/test';

export default{
    data(){
        return {
            data: [],
            contents: [],
            contents_show: [],
        }
    },
    methods: {
        swipeImage(index){
            // 스와이프 동작
            // 현재 이미지 가리기
            // 이미지 이벤트 전송
            this.contents_show[index] = false;

            // 페이저블, 데이터 더 가져오기


        },
        movePage(url){
            this.$router.push(url);
        },
    },
    beforeCreate() {
        apiTest.getSwipeImage()
        .then(response=>{
            console.log("getSwipeImage : ", response);
            this.data = response.data;
            this.contents = Array.from(this.data.content);            
            this.contents_show = new Array(this.contents.length).fill(true);
        })
        .catch(function (e){
            console.log(e);
        });
    },
}


</script>
<style scoped>
.top{
    display: flex;
    height: 40px;
}
.top-title{
    margin: auto;
}
.mybox{
    position: absolute;
    right: 4px;
    width: 6vw;
    height: auto;
}
.mybox img{
    width: 100%;

}
.content{
    margin: auto; 
}
.content-imgtag{
    margin: auto;   
    width: 92vw;
    height: 78vh;
}
.content-imgtag img{
    position: fixed;
    width: 92vw;
    height: 78vh;
}

</style>