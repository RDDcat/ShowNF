<!-- 마이 페이지 -->
<template>
    <div class="top">
        <div class="top-title">마이페이지</div>
        <img class="top-menu" src="../assets/sample.png" @click="this.isMenu=true">
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
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">거래완료</div>
                    <div class="pofile-statics-card-content">38</div>
                </div>
                <div class="pofile-statics-card">
                    <div class="pofile-statics-card-title">거래완료</div>
                    <div class="pofile-statics-card-content">38</div>
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

    <hr />
    <div class="xp">
        <div class="xp-state">진화 [72/100] </div>
        <div class="xp-level-now">알</div>
        <div class="xp-line"></div>
        <div class="xp-level-next">크레</div>
    </div>

    <hr />
    <div class="medal">
        <img class="medal-img" src="../assets/sample.png">
        <img class="medal-img" src="../assets/sample.png">
        <img class="medal-img" src="../assets/sample.png">
        <img class="medal-img" src="../assets/sample.png">
    </div>    
    <hr />
    <!-- 토글메뉴에 따라 달라지는 컨텐츠 -->
    <NavBarProfile/>
    <hr />
    <router-view/>

    <!-- -->
    <div class="modal-menu" v-if="isMenu == true">
        <div class="modal-top">
            <img class="modal-img" src="../assets/sample.png" @click="this.isMenu=false">
        </div>
        <div class="modal-contents">
            <div class="modal-content" @click="movePage('/my/change')">프로필 변경</div>
            <div class="modal-content" @click="movePage('/alerm')">알림설정</div>
            <div class="modal-content" @click="movePage('/point')">포인트 내역</div>
            <div class="modal-content" @click="movePage('/leader')">리더보드</div>
            <div class="modal-content" @click="movePage('/achievement')">업적</div>
            <div class="modal-content" @click="movePage('/storage/album')">보관함</div>
            <div class="modal-content" @click="movePage('/account')">계정관리</div>
            <div class="modal-content" @click="movePage('/setting')">설정</div>
        </div>
    </div>

</template>
<script>
import NavBarProfile from '../components/NavBarProfile'

export default{
    components: {
        NavBarProfile,
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
    overflow: auto;
}
.pofile-img{    
    margin: 12px;    
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
.profile-info-user{
    margin: 8px;
}
.profile-info-statemessage{
    margin: auto;
}


.xp{
    display: flex;
}
.xp-state{
    margin: auto;
    font-size: 8px;
}
.xp-level-now{
    margin: auto;
    font-size: 6px;
    background-color: #f6f6f6;
    width: 6vw;
    text-align: center;
}
.xp-line{
    width: 64vw;
    height: 2px;
    border-radius: 10px;
    border: 1px solid #000;
    margin: auto;
}
.xp-level-next{
    margin: auto;
    font-size: 6px;
    background-color: #f6f6f6;
    width: 6vw;
    text-align: center;
}


.medal{
    display: flex;
}
.medal-img{
    width: 24px;
    margin: 4px;
}


.modal-menu{
    position: fixed;
    top: 0;
    right: 0;
    background-color: #454542;
    width: 80vw;
    height: 92vh;
}
.modal-img{
    position: absolute;
    right: 0;
    width: 24px;
    margin: 4px;
}
.modal-contents{
    margin-top: 60px;
}
.modal-content{
    text-align: center;
    color: #fff;
    font-size: 16px;
    margin: 20px;
}


hr{
    margin: 0%;
    background-color : #f6f6f6;
    height: 1px;
    border : 0;
}
</style>