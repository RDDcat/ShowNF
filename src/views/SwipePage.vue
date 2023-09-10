<!-- 스와이프 페이지 -->
<template>
    <div class="top">
        <div class="top-title" @click="pringData">스와이프</div>
        <div class="mybox"><img src="assets/logo.png" @click="movePage('/storage/album')"></div>
    </div>
    <div class="content-imgtag">
        <img :src="content[0].imageUrl">
        {{this.content}}
    </div>
</template>
<script>
import apiTest from '@/api/test';

export default{
    data(){
        return {
            data: [],
            content: [],
        }
    },
    methods: {
        pringData(){
            console.log("data : ", this.data);

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
            this.content = Array.from(this.data.content);
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

</style>