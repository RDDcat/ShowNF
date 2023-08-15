<template>
    <div class='top' >
        <img alt="Vue logo" src="assets/logo.png" width='32' @click='moveBack()'>
        <div class="top-title">랭킹</div>        
        <div class="balance"></div>
    </div>
    <div class="nav-ranks">
        <div class="nav-rank">

        </div>
    </div>
    <div class="cards">
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-username">NickName</div>
            <div class="card-rating">rating: 21223</div>
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

.card{
    margin:15px;
    border-radius: 10px;
    width: 90vw;
    height: 75px;
    background-color: #d9d9d9;
    display: flex;
}
.card-img{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 12px;
    margin-right: 12px;
}
.card-username{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    font-size: 16px;
}
.card-rating{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 16px;
    font-size: 14px;
}


</style>