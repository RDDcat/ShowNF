<!-- 마이 페이지 -->
<template>
    <MyPageTop
        @isMenu="setInput"  
        :isMenu="this.isMenu" />
        {{ this.isMenu }}
    <MyPageProfile/>
    <MyPageXP/>
    <MyPageMedal/>

    <!-- 토글메뉴에 따라 달라지는 컨텐츠 -->
    <NavBarProfile/>
    <router-view/>

    <!-- 사이드 버거메뉴 -->
    <SideNavModal 
        @isMenu="setInput" 
        :isMenu="this.isMenu"
        v-if="this.isMenu == true" /> 

</template>
<script>
import MyPageTop from '@/components/MyPage/MyPageTop'
import MyPageProfile from '@/components/MyPage/MyPageProfile'
import MyPageXP from '@/components/MyPage/MyPageXP'
import SideNavModal from '@/components/modal/SideNavModal'
import MyPageMedal from '@/components/MyPage/MyPageMedal'
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
        setInput(isMenu){
            this.isMenu = isMenu;
            console.log('check : ', isMenu);
        },
        movePage(url){
            this.$router.push(url);
        },
    },
};
</script>
<style scoped>

</style>