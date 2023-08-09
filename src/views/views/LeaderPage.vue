<template>
    <div class='top' @click='moveBack()'>
        <img alt="Vue logo" src="assets/logo.png" width='32'>
        리더보드
    </div>
</template>
<script>


export default{
    components: {
        
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

</style>