<!-- 마이 페이지 -->
<template>
    <div class="top">
        <div class="top-title">마이페이지</div>
        <div class="top-menu"><img src="../assets/sample.png"></div>
    </div>
    <div class="pofile">

    </div>
    <div class="xp">

    </div>
    <div class="medal">

    </div>
    <div class="toggle-menu">

    </div>
    <!-- 토글메뉴에 따라 달라지는 컨텐츠 -->
    <router-view/>
</template>
<script>
// import {RouterView} from 'vue-router'
export default{
    components: {
    },
}
</script>
<style scoped>
.top-menu{
    width: 6vw;
}

</style>