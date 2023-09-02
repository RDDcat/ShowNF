<template>
    <div class="float-icon">
        <img src="@/assets/sample.png" @click="moveAddPost">
    </div>
</template>
<script>

export default{
    methods: {
        moveAddPost(){
            console.log('게시글 작성으로 이동');
        },
    },
}
</script>

<style scoped>
.float-icon{
    position: fixed;
    bottom: 9vh;
    right: 3vw;
    width: 40px;
    height: 40px;
    
}
.float-icon img{
    width: 100%;
    height: 100%;
}
</style>