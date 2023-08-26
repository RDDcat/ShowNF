<!-- 마이 페이지 -->
<template>
    <div class="top">
        <div class="balance"></div>
        <div class="top-title">마이페이지</div>
        <img class="top-menu" src="@/assets/sample.png" @click="this.isMenu=true">
    </div>
    
    <MyPageProfile/>

    <MyPageXP/>

    <MyPageMedal/>

    <!-- 토글메뉴에 따라 달라지는 컨텐츠 -->
    <NavBarProfile/>
    <router-view/>

    <!-- 사이드 버거메뉴 -->
    <SideNavModal @isMenu="this.isMenu = e" :isMenu="this.isMenu" 
        v-if="isMenu == true" /> 

</template>
<script>
import MyPageProfile from '@/components/MyPage/MyPageProfile'
import MyPageXP from '@/components/MyPage/MyPageXP'
import SideNavModal from '@/components/modal/SideNavModal'
import MyPageMedal from '@/components/MyPage/MyPageMedal'
import NavBarProfile from '@/components/NavBarProfile'

export default{
    components: {
        MyPageProfile,
        MyPageXP,
        SideNavModal,
        MyPageMedal,
        NavBarProfile,
    },
    data(){
        return {
            isMenu: false,
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
.balance{
    width: 24px;
    margin: 4px;
}
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
</style>