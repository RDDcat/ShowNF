<template>
    <div class='top' >
        <div class="balance" @click="this.$emit('changePage', [false, true, false, false])"></div>
        <div class="top-title">마이펫</div>        
        <div class="balance"></div>
    </div>

    <div class="frame">
        <div class="left-arrow">
            <img src="assets/logo.png" width="16" height="16">
        </div>
        <div class="main-frame">
            <img class="main-frame-img" src="assets/logo.png" width="120" height="120">
            <div class="main-frame-img-shadow">
                <img src="assets/logo.png" width="52" height="12">
            </div>
            
            <div class="main-frame-pet-name"></div>

        </div>
        <div class="right-arrow">
            <img src="assets/logo.png" width="16" height="16">
        </div>
    </div>

    <!-- -->
    <div class="food">
        <div class="food-title">먹이</div>
        <div class="food-detail">
            <div class="food-detail-text">애호박</div>
            <div class="food-detail-number">1</div>
            <div class="food-detail-unit">개</div>
        </div>
    </div>
    <div class="food-size-buttons">
        <div class="food-size-button">극소</div>
        <div class="food-size-button">소</div>
        <div class="food-size-button">중</div>
        <div class="food-size-button">대</div>
    </div>
    <div class="weight">
        <div class="weight-title">몸무게</div>
        <div class="weight-text">33g</div>
    </div>
    <div class="memo">
        <div class="memo-title">메모</div>
        <div class="memo-text">잘먹음</div>
    </div>

</template>
<script>
</script>
<style scoped>
.top{
    display: flex;
}
.top-title{
    margin: auto;
    margin-top: 1vh;
    justify-content: center;
    font-size: 20px;
    height: 38px;
}
.balance{
    width: 32px;
}

.frame{
    display: flex;
    height: 36vh;
    border: 1px solid rgb(166, 168, 175);

}
.main-frame{
    display: flex;
    flex-direction: column;
    margin:auto;
}
.main-frame-img{
    z-index: 99;
}
.main-frame-img-shadow{
    position: relative;
    top: auto;
    left: auto;
    bottom: 10px;
    right: auto;
    text-align: center;
}
.main-frame-pet-name{
    position: relative;
    top: 4vh;
    left: auto;
    bottom: auto;
    right: auto;
    text-align: center;
}

.left-arrow{
    margin-left: 1.5vw;
    margin-top: auto;
    margin-bottom: auto;
}
.right-arrow{
    margin-right: 1.5vw;
    margin-top: auto;
    margin-bottom: auto;
}

.food{
    margin-top: 8px;
    margin-left: 16px;
}
.food-title{    
    font-size: 12px;
    color: #acacb1;
}
.food-detail{
    display: flex;
}
.food-detail-text{
    margin-left:4px;
    margin-top:4px;
    margin-bottom:10px;

    width: 60vw;
    font-size: 18px;
}
.food-detail-number{
    margin-top: auto;
    margin-bottom: auto;
    width: 10vw;
    font-size: 20px;
    text-align: right;
    
}
.food-detail-unit{
    margin-left:8px;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 12px;
    color: #acacb1;
}

.food-size-buttons{
    display: flex;
    margin-left: 8px;    
    margin-right: 8px;
}
.food-size-button{    
    margin: 2px;
    width: 25%;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    background-color: #f6f6f6;
    text-align: center;
}
.food-size-button-text{
    position: relative;
    transform: translateY(30%);
    font-size: 14px;
}

.weight{
    margin-left: 16px;
    margin-top: 10px;

}
.weight-title{    
    margin-top: 4px;
    font-size: 12px;
    color: #acacb1;
}
.weight-text{
    margin-left: 4px;
}

.memo{
    margin-left: 16px;
    margin-top: 10px;

}
.memo-title{
    margin-top: 4px;
    font-size: 12px;
    color: #acacb1;
}
.memo-text{
    margin-left:4px;
    margin-top:4px;
    font-size: 16px;
}

.submit{
    position: absolute;
    bottom: 7.5vh;
}
.submit-message{
    font-size: 6px;
    text-align: center;
}
.submit-button{
    width: 92vw;
    margin-left: 4vw;
    border-radius: 8px;
    border: 1px solid #f6f6f6;
    background-color: #5ef351;
}
.submit-button-text{
    font-size: 18px;
    text-align: center;
}

</style>