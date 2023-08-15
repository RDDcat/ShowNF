<template>
    <div class='top' >
        <img alt="Vue logo" src="assets/logo.png" width='32' @click='moveBack()'>
        <div class="top-title">랭킹</div>        
        <div class="balance"></div>
    </div>
    <div class="cards">
        <div class="card-title">이용내역</div>
        <div class="card">
            
        </div>
    </div>
</template>
<script>


export default{
    components: {
        
    },
    data(){
        return {
            isMenu : false,
            contents: [],
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
        moveBack(){
            this.$router.go(-1);
        },
    },
};
</script>
<style scoped>
.top{
    display: flex;
}
.top-title{
    margin: auto;
    justify-content: center;
}
.balance{
    width: 32px;
}


</style>