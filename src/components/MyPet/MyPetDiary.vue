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
        <div class="food-form">
            <div class="food-select">
                <select v-model="selected">
                    <option disabled value="">하나를 선택해주세요..!</option>
                    <option>귀뚜라미</option>
                    <option>밀웜</option>
                    <option>개미</option>
                    <option>목도리도마뱀~~</option>
                </select>
            </div>
            <div class="food-input">
                <input v-model="message" placeholder="마리">
            </div>
            <div class="food-plus-button" @click="console.log('+1 clicked')">
                <div class="food-plus-button-text">+1</div>
            </div>
        </div>
        <div class="food-size-buttons">
            <div class="food-size-button"><div class="food-size-button-text">극소</div></div>
            <div class="food-size-button"><div class="food-size-button-text">소</div></div>
            <div class="food-size-button"><div class="food-size-button-text">중</div></div>
            <div class="food-size-button"><div class="food-size-button-text">대</div></div>
        </div>
    </div>
    <div class="weight">
        <div class="weight-title">몸무게</div>
        <div class="weight-input">
            <input v-model="message" placeholder="몸무게를 입력해주세요" >
            <div class="weight-input-unit">(단위: g)</div>
        </div>
    </div>
    <div class="memo">
        <div class="memo-title">메모</div>
        <input placeholder="간단한 메모를 입력해주세요">
    </div>
    
    <div class="submit">
        <div class="submit-message">등록 후 하루가 지나면 수정이 불가능합니다.</div>
        <div class="submit-button">
            <div class="submit-button-text">등록하기</div>
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

.food-title{    
    margin: 4px;
    padding-left: 8px;
    font-size: 12px;
}
.food-form{
    display: flex;
    margin-bottom: 8px;
}
.food-select{
    margin-left: 4px;
    margin-right: 4px;
    height: 38px;
    width: 50%;
}
.food-select select{
    height: 100%;    
    width: 100%;
    border-radius: 6px;
    border: 1px solid #acacb1;
}
.food-input{
    margin-left: 4px;
    margin-right: 8px;
    width: 33%;
    height: 34px;
}
.food-input input{
    width: 100%;
    height: 100%;    
    border-radius: 6px;
    border: 1px solid #acacb1;
}
.food-input input::placeholder{
    text-align: right;
}
.food-plus-button{   
    padding: 1px;
    margin-left: 4px;
    width: 42px;
    height: 36px;
    border-radius: 6px;
    background-color: #d9d9d9;
    align-items: center;
}
.food-plus-button-text{
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
}

.food-size-buttons{
    display: flex;
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
    margin:4px;

}
.weight-title{    
    padding-left: 6px;
    font-size: 12px;
}
.weight-input{
    display: flex;
}
.weight-input input{
    width: 46vw;
    height: 36px;
    border-radius: 10px;
    border: 1px solid #acacb1;
}
.weight-input input::placeholder{
    text-align: center;
}
.weight-input-unit{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 4px;
}

.memo{
    margin:4px;
    margin-top:12px;

}
.memo-title{
    padding-left: 6px;
    font-size: 12px;
}
.memo input{
    width: 96vw;    
    height: 20vh;
    border-radius: 10px;
    border: 1px solid #acacb1;
}
.memo input::placeholder{

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