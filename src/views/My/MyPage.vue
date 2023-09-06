<!-- 마이 페이지 -->
<template>
    <MyPageTop
        @onMenu="onMenu"  
        />
    <MyPageProfile/>
    <MyPageXP/>
    <MyPageMedal/>

    <!-- 토글메뉴에 따라 달라지는 컨텐츠 -->
    <NavBarProfile/>
    <router-view/>

    <!-- 사이드 버거메뉴 -->
    <SideNavModal 
        @offMenu="offMenu" 
        v-if="this.isMenu == true" /> 

</template>
<script>
import MyPageTop from '@/components/My/MyPage/MyPageTop'
import MyPageProfile from '@/components/My/MyPage/MyPageProfile'
import MyPageXP from '@/components/My/MyPage/MyPageXP'
import SideNavModal from '@/components/modal/SideNavModal'
import MyPageMedal from '@/components/My/MyPage/MyPageMedal'
import NavBarProfile from '@/components/NavBarProfile'

export default{
    components: {
        MyPageTop,
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
        onMenu(){
            this.isMenu = true;
        },
        offMenu(){
            this.isMenu = false;
        },
        movePage(url){
            this.$router.push(url);
        },
    },
};
</script>
<style scoped>

</style>