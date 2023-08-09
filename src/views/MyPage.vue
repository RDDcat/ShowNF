<!-- 마이 페이지 -->
<template>
    <div class="top">
        <div class="top-title">마이페이지</div>
        <img class="top-menu" src="../assets/sample.png">
    </div>
    <div class="pofile">
        <div class="pofile-static">
            <img class="pofile-img" src="../assets/sample.png">
            <div class="pofile-statics">
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">활동일수</div>
                    <div class="pofile-statics-card-content">+182일</div>
                </div>
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">팔로워</div>
                    <div class="pofile-statics-card-content">823</div>
                </div>
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">팔로잉</div>
                    <div class="pofile-statics-card-content">1198</div>
                </div>
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">게시물</div>
                    <div class="pofile-statics-card-content">219</div>
                </div>
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">거래완료</div>
                    <div class="pofile-statics-card-content">38</div>
                </div>
                
            </div>
        </div>
        <div class="profile-info">
            <div class="profile-info-user">
                <div class="profile-info-username">백설공주</div>
                <div class="profile-info-userid">@snow_white21</div>
            </div>
            <div class="profile-info-statemessage">
                "거울아 거울아 나를 두고 가시나"
            </div>
        </div>
    </div>
    <div class="xp">

    </div>
    <div class="medal">

    </div>
    <div class="toggle-menu">

    </div>
    <!-- 토글메뉴에 따라 달라지는 컨텐츠 -->
    <NavBarProfile/>
    <router-view/>

</template>
<script>
import NavBarProfile from '../components/NavBarProfile'

export default{
    components: {
        NavBarProfile,
    },
    data(){
        return {
            contents: [],
        }
    },
};
</script>
<style scoped>
.top{
    display: flex;
}
.top-title{
    font-size: 18px;
    margin: auto;
}
.top-menu{
    width: 24px;
    margin: 4px;
}
.pofile-static{
    display: flex;
}
.pofile-img{    
    margin: 16px;    
    width: 72px;
}
.pofile-statics{
    display: flex;
}
.pofile-statics-card{
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
.pofile-statics-card-title{
    font-size: 10px;
    margin-bottom: 2px;
}
.pofile-statics-card-content{
    font-size: 14px;
}
.profile-info{
    display: flex;
}
.profile-info-statemessage{
    margin: auto;
}
</style>