<!-- 마이 페이지 -->
<template>
    <div class="top">
        <div class="top-title">마이페이지</div>
        <img class="top-menu" src="../assets/sample.png">
    </div>
    <div class="pofile">        
        <div>
            <img class="pofile-img" src="../assets/sample.png">
            <div>
                네모네모
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
.pofile-img{    
    margin: 16px;    
    width: 72px;
}
.profile-info{
    display: flex;
}
.profile-info-statemessage{
    margin: auto;
}
</style>