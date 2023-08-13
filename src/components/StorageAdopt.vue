<template>
    <div class='contents'>        
        <div class="content">
            <img class="content-img" src="../assets/logo.png">
            <div class="content-title">싱글벙글</div>
            <div class="content-price">175,000 원</div>
            <div class="content-username">user1</div>
        </div>
        
        <div class="content">
            <img class="content-img" src="../assets/logo.png">
            <div class="content-title">싱글벙글</div>
            <div class="content-price">175,000 원</div>
            <div class="content-username">user1</div>
        </div>
        
        <div class="content">
            <img class="content-img" src="../assets/logo.png">
            <div class="content-title">싱글벙글</div>
            <div class="content-price">175,000 원</div>
            <div class="content-username">user1</div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
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
    border-radius: 10px;
    
}
.content-title{
    font-size: 14px;    
    margin-right: auto;
}
.content-price{
    font-size: 12px;  
}
.content-username{
    font-size: 10px;
    text-align: right;
    margin-right: 2vw;
}
</style>