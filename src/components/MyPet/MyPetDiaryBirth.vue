<template>
    <div class='top' >
        <div class="balance" @click="this.$emit('changePage', [false, true, false, false, false])"></div>
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
    <div class="name">
        <div class="name-title">이름</div>
        <div class="name-text">최종병기</div>
    </div>
    <div class="species">
        <div class="species-card">
            <div class="species-card-title">종</div>
            <div class="species-card-text">거북이</div>
        </div>
        <div class="species-card">
            <div class="species-card-title">종</div>
            <div class="species-card-text">그리스 육지거북</div>
        </div>
    </div>
    <div class="birth">
        <div class="birth-title">생일</div>
        <div class="birth-text">2023.08.04</div>
    </div>
    <div class="weight">
        <div class="weight-title">몸무게</div>
        <div class="weight-text">33g</div>
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

.name{

}
.name-title{
    margin-left: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    color: #acacac;
}
.name-text{
    margin-left: 16px;
    font-size: 20px;

}

.species{
    display: flex;
    width: 100vw;
}
.species-card{
    width: 50%;
    padding: 12px;
}
.species-card-title{

}
.species-card-text{

}

.birth{


}
.birth-title{

}
.birth-text{

}

.weight{

}
.weight-title{

}
.weight-text{

}



</style>