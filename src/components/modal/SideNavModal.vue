<template>
    <div class="modal-menu" v-if="isMenu == true">
        <div class="modal-top">
            <img class="modal-img" src="@/assets/sample.png" @click="this.$emit('isMenu', false)">
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
export default{
    props: {
        isMenu: Boolean,
    },
    data(){
        return {        
            
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
</style>