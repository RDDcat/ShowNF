<template>
    <div class="top-balance"></div>
    <div class="top">
        <div class="balance"></div>
        <div class="top-title">분양 / 입양</div>
        <div class="balance"></div>
    </div>
</template>
<script>


export default {
    components: {

    },
    data(){
        return {

        }
    },
    methods: {

    },
}
</script>
<style scoped>

.top-balance{
    height: 40px; 
}
.top-back{
    width: 24px;
    margin: 4px;
}
.top{
    position: absolute;
    top:0;
    background-color: #ffffff;
    display: flex;
    width:100vw;
    height: 40px;
}
.top-title{
    font-size: 18px;
    margin: auto;
}
.balance{
    width: 24px;
    margin: 4px;
}



</style>