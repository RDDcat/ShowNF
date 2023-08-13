<template>
    <div class='top' @click='moveBack()'>
        <img alt="Vue logo" src="assets/logo.png" width='32'>
        <div class="top-text">보관함</div>
        <div class="balance"></div>
    </div>
    <NavBarStorage/>
    <router-view></router-view>
</template>
<script>
import NavBarStorage from '@/components/NavBarStorage';



export default{
    components: {
        NavBarStorage,
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
.top-text{
    width: 100%;
    text-align: center;
    font-size: 18px;
}
.balance{
    width: 32px;
}
</style>