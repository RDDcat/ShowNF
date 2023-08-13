<template>
    <div class='top' @click='moveBack()'>
        <img alt="Vue logo" src="assets/logo.png" width='32'>
        <div class="top-title"> 알람설정</div>        
        <div class="balance"></div>
    </div>
        <hr/>
    <div class="contents">
        <div class="top-content">
            <img class="top-content-alerm-img" src="assets/logo.png" width='32'>
            <div class="top-content-text">알림허용</div>
            <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">            
        </div>
        <hr/>
        <div class="center-contents">
            <div class="center-content">
                <div class="center-content-text">채팅알림</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
            <div class="center-content">
                <div class="center-content-text">내 상품이 좋아요 받았을때</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
            <div class="center-content">
                <div class="center-content-text">내가 좋아요한 상품의 가격이 떨어질때</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
            <div class="center-content">
                <div class="center-content-text">누가 날 팔로우 했을때</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
            <div class="center-content">
                <div class="center-content-text">내 게시글에 댓글이 달렸을때</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
            <div class="center-content">
                <div class="center-content-text">내 댓글에 대댓이 달렸을때</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
            <div class="center-content">
                <div class="center-content-text">내 게시글에 좋아요, 정보추가 박혔을때</div>
                <img class="top-content-alerm-toggle" src="assets/logo.png" width='64' height="32">  
            </div>
        </div>
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
.top{
    display: flex;
}
.top-title{
    margin: auto;
    justify-content: center;
}
.balance{
    width: 32px;
}

.top-content{
    display: flex;
    margin-top: 12px;
    margin-left: 6vw;
    margin-bottom: 12px;
}
.top-content-text{
    margin-left: 6vw;
    margin-right: auto;
    padding-top: 4px;
}
.top-content-alerm-toggle{
    
    margin-right: 6vw;

}

.center-contents{
}
.center-content{
    display: flex;
    margin: 12px;
}
.center-content-text{
    margin-right:auto;
}
.top-content-alerm-toggle{
    margin-right: 16px;
}



hr{
    margin: 0%;
    background-color : #f6f6f6;
    height: 1px;
    border : 0;
}
</style>