<template>
    <div class='top'>
        <div class="top-title">마이펫</div>
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
            
            <div class="main-frame-pet-name">최종병기</div>

        </div>

        <div class="right-arrow">
            <img src="assets/logo.png" width="16" height="16">
        </div>
    </div>

    <div class="pet-cards">
        <div class="pet-card">
            

        </div>
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
    height: 40px;
}

.frame{
    display: flex;
    height: 36vh;
    border: 1px solid black;

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

.pet-cards{
    display: flex;
}
.pet-card{

}
</style>