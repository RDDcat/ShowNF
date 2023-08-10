<template>
    <div class="top">
        <div class="top-text">좋아요 표시한 게시글</div>
    </div>
    <div class='contents'>        
        <div class="content">
            <img class="content-img" src="../assets/logo.png">
            <div class="content-title">싱글벙글</div>
            <div class="content-username">user1</div>
        </div>
        
        <div class="content">
            <img class="content-img" src="../assets/logo.png">
            <div class="content-title">싱글벙글</div>
            <div class="content-username">user1</div>
        </div>
        
        <div class="content">
            <img class="content-img" src="../assets/logo.png">
            <div class="content-title">싱글벙글</div>
            <div class="content-username">user1</div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.top-text{
    font-size: 14px;
    margin-left: 3vw;
    margin-top: 1vw;    
    margin-bottom: 1vw;
}
.contents{
    display: flex;
    flex-wrap: wrap;
}
.content{
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 1vw;    
    margin-bottom: 1vw;
}
.content-img{
    width: 44vw;
    
}
.content-title{
    font-size: 14px;    
    margin-right: auto;
}
.content-username{
    font-size: 10px;
    text-align: right;
    margin-right: 2vw;
}
</style>