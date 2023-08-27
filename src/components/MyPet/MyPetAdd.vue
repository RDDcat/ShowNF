<template>
    <div class='top' >
        <img alt="Vue logo" src="assets/logo.png" width='32' height="32" @click='movePage("/pet")'>
        <div class="top-title">마이펫 등록</div>        
        <div class="balance"></div>
    </div>
    <div class="imgs">
        <div class="img-add"><img alt="Vue logo" src="assets/logo.png"></div>
        <div class="img"></div>
    </div>
    <div class="input-name">
        <div class="title">이름</div>
        <input v-model="message" placeholder="이름을 입력하세요.">
    </div>
    <div class="input-species">
        <div class="input-species-select">
            <div class="title">종</div>
            <select v-model="selected">
                <option disabled value="">하나를 선택해주세요..!</option>
                <option>도마뱀</option>
                <option>뱀</option>
                <option>개구리</option>
                <option>거북이</option>
                <option>목도리도마뱀~~</option>
            </select>       
        </div>
        <div class="input-species-text">
            <div class="title">종</div>
            <input v-model="message" placeholder="">
        </div>
    </div>
    <div class="input-birth">
        <div class="title">생일 ( 연도 / 월 / 일 )</div>
        <input v-model="message" placeholder="23">
        <input v-model="message" placeholder="8">
        <input v-model="message" placeholder="23">
    </div>
    <div class="weight">
        <div class="title">몸무게</div>
        <div class="weight-input">
            <input v-model="message" placeholder="몸무게를 입력하세요.">
            <div class="weight-input-unit">g</div>
        </div>
    </div>


</template>
<script>

export default {
    data(){
        return {
            
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
    },
}

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

.imgs{
    display: flex;
}
.img-add{
    margin: 4px;
    width: 60px;
    height: 60px;
}
.img-add img{
    width: 100%;
    height: 100%;
}
.img{
    margin: 4px;
    width: 60px;
    height: 60px;
}

.title{
    font-size: 12px;
}
.input-name{
    margin:1vw;
}
.input-name input{
    width: 96vw;
    height: 42px;
    border-radius: 6px;
    border: 1px solid #acacb1;
}

.input-species{
    margin:4px;
    display: flex;
}
.input-species-select{
    width: 46vw;
}
.input-species-select select{
    width: 46vw;
    height: 42px;
    border-radius: 6px;
    border: 1px solid #acacb1;
}
.input-species-text{
    margin: auto;
}
.input-species-text input{    
    width: 46vw;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #acacb1;
}

.input-birth{
    margin:4px;

}
.input-birth input{
    width: 30vw;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #acacb1;
    margin-right:4px;
}
.input-birth input::placeholder{
    text-align: right;
}

.weight{
    margin:4px;

}
.weight-input{
    display: flex;
}
.weight-input input{
    width: 46vw;
    height: 38px;
    border-radius: 6px;
    border: 1px solid #acacb1;
}
.weight-input-unit{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 4px;
}



</style>