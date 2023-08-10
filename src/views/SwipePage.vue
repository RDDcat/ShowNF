<!-- 스와이프 페이지 -->
<template>
    <div class="top">
        <div class="top-title">스와이프</div>
        <div class="mybox"><img src="../assets/sample.png"></div>
    </div>
    <div class="content-imgtag">
        <img class="content-imgtag" src="../assets/sample.png" @click="movePage('/storage')">
    </div>
</template>
<script>
import apiTest from '@/api/test';

export default{
    methods: {
        movePage(url){
            this.$router.push(url);
        },
    },
    mounted() {
        apiTest.getTestDAO()
        .then(function (response){
            console.log("getTestDAO : ", response);
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