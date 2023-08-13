<template>
    <div class='top' @click='moveBack()'>
        <img alt="Vue logo" src="assets/logo.png" width='32'>
        <div class="top-title"> 프로필 변경</div>        
        <div class="balance"></div>
    </div>
    <div class="contents">
        <div class="profile-img">
            <img alt="Vue logo" src="assets/logo.png"> 
        </div>
        <div class="profile-name">
            <div class="profile-name-info">이름</div>
            <div class="profile-name-content">
                <div class="profile-name-text">백설공주</div> <img alt="Vue logo" src="assets/logo.png" width="24">        
            </div>     
        </div>
        <div class="profile-message">
            <div class="profile-message-info">상태메시지</div>
            <div class="profile-message-content">
                <div class="profile-message-text">거울아 거울아 나를 두고 가시나</div> <img alt="Vue logo" src="assets/logo.png" width="24">     
            </div>
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

.profile-img{
    margin-left: auto;
    margin-right: auto;
    width: 26vw;
}
.profile-img img{
    width: 100%;
}

.profile-name{
    margin-top: 2vw;
    margin-left: 6vw;
    margin-right: auto;
    margin-bottom: 2vw;
}
.profile-name-info{
    color: #ACACB1;
    font-size: 12px;
    margin-bottom: 2px;
    
}
.profile-name-content{
    display: flex;
}
.profile-name-text{
    color: #45454E;
    font-size: 16px;
    margin-right: 2vw;
}


.profile-message{
    margin-top: 2vw;
    margin-left: 6vw;
    margin-right: auto;
    margin-bottom: 2vw;

}
.profile-message-info{
    color: #ACACB1;
    font-size: 12px;
    margin-bottom: 2px;

}
.profile-message-content{
    display: flex;
}
.profile-message-text{
    color: #45454E;
    font-size: 16px;
    margin-right: 2vw;
}
</style>