<template>
    <div class="background" @click="moveBack">
        <div class="content">
            <img src="@/assets/logo.png" >
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        moveBack(){
            console.log('모달창 닫기');
            this.$emit('closeImageModal');
        },
    },
}
</script>
<style scoped>
.background{
    position: fixed;
    top:0px;
    bottom:0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #313131;
}
.content{
    position: relative;
    margin: auto;
}
.content img{
    width: 90vw;
    height: 90vw;
}
</style>