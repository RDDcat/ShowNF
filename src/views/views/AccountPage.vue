<template>
    <div class='top'>
        <img alt="Vue logo" src="assets/logo.png" width='32' @click='moveBack()'>
        <div class="top-title">계정관리</div>
        <div class="balance"></div>
    </div>
    <div class="cards">
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-username">계정 이름</div>
                <div class="card-userid">@q20230815</div>                
            </div>
            <img class="card-img" src="assets/logo.png" width='20' height="20">
        </div>
        <div class="card-add-account">
            <img class="card-add-account-img" src="assets/logo.png" width='36' height="36">
            <div class="card-add-account-detail">계정 추가하기</div>
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
    height: 40px;
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
    margin-bottom: 12px;
    border-radius: 5px;
    width: 90vw;
    height: 75px;
    background-color: #ffffff;
    display: flex;
    box-shadow: 1px 1px 1px 1px #afaeae;
}
.card-img{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 12px;
    margin-right: 12px;
}
.card-detail{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
}
.card-username{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    font-size: 18px;
}
.card-userid{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 16px;
    font-size: 14px;
}

.card-add-account{    
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 8px;
    margin-bottom: 12px;
    border-radius: 5px;
    width: 90vw;
    height: 42px;
    background-color: #d9d9d9;
    display: flex;
    box-shadow: 1px 1px 1px 1px #afaeae;
}
.card-add-account-img{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 12vw;

}
.card-add-account-detail{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 12vw;
    margin-right: auto;

}
</style>