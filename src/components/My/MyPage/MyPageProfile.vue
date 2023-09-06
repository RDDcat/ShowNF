<template>
    <div class="profile">
        <div class="profile-static">
            <img class="profile-img" src="@/assets/logo.png">
            <div class="profile-statics">
                <div class="profile-statics-card">
                    <div class="profile-statics-card-title">활동일수</div>
                    <div class="profile-statics-card-content">+182일</div>
                </div>
                <div class="profile-statics-card" @click="movePage('/follow')">
                    <div class="profile-statics-card-title">팔로워</div>
                    <div class="profile-statics-card-content">823</div>
                </div>
                <div class="profile-statics-card" @click="movePage('/follow')">
                    <div class="profile-statics-card-title">팔로잉</div>
                    <div class="profile-statics-card-content">1198</div>
                </div>
                <div class="profile-statics-card">
                    <div class="profile-statics-card-title">게시물</div>
                    <div class="profile-statics-card-content">219</div>
                </div>
                <div class="profile-statics-card">
                    <div class="profile-statics-card-title">거래완료</div>
                    <div class="profile-statics-card-content">38</div>
                </div>
                <div class="profile-statics-card">
                    <div class="profile-statics-card-title">거래완료</div>
                    <div class="profile-statics-card-content">38</div>
                </div>
                <div class="profile-statics-card">
                    <div class="profile-statics-card-title">거래완료</div>
                    <div class="profile-statics-card-content">38</div>
                </div>
                <div class="profile-statics-card">
                    <div class="profile-statics-card-title">거래완료</div>
                    <div class="profile-statics-card-content">38</div>
                </div>
                
            </div>
        </div>
        <div class="profile-info">
            <div class="profile-info-user">
                <div class="profile-info-username">백설공주</div>
                <div class="profile-info-userid">@snow_white21</div>
            </div>
            <div class="follow" v-show="showFollowButton">
                <div class="follow-text">팔로우</div>
            </div>
            <div class="profile-info-statemessage">
                "거울아 거울아 나를 두고 가시나"
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            showFollowButton: true,
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
    },
}
</script>
<style scoped>
.follow{
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    width: 50px;
    height: 24px;
    border: 1px solid #f5f5f5;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 2px;
}
.follow-text{
    margin: auto;
    font-size: 10px;
}
.profile{
    
}
.profile-static{
    display: flex;
    overflow: auto;
    border-bottom: 1px solid #f6f6f6;
}
.profile-img{    
    margin: 12px;    
    width: 72px;
}
.profile-statics{
    display: flex;     
}
.profile-statics-card{
    border-radius: 5px;
    background-color: #f5f5f5;
    border: 1px soild #d5d5d5;
    width: 64px;
    height: 52px;
    margin: auto;    
    margin-right: 2px;
    margin-left: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
}
.profile-statics-card-title{
    font-size: 10px;
    margin-bottom: 2px;
}
.profile-statics-card-content{
    font-size: 14px;
}

.profile-info{
    display: flex;
    border-bottom: 1px solid #f6f6f6;
}
.profile-info-user{
    margin: 8px;
}
.profile-info-username{
    font-size: 14px;
}
.profile-info-userid{
    font-size: 8px;
}
.profile-info-statemessage{
    margin: auto;
    font-size: 16px;
}
</style>