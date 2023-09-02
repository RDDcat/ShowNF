<template>
    <div class="top">
        <div class="balance"></div>
        <div class="top-title">마이페이지</div>
        <img class="top-menu" src="@/assets/logo.png" @click="this.$emit('onMenu')">
    </div>
</template>
<script>
export default{
    props: {

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
    height: 40px;
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