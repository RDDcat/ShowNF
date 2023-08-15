<template>
    <div class='top'>
        <img alt="Vue logo" src="assets/logo.png" width='32' @click='moveBack()'>
        <div class="top-title">도전과제</div>
        <div class="balance"></div>
    </div>
    <div class="badge">
        <div class="badge-title">획득</div>
        <div class="badge-imgs">
            <img alt="Vue logo" src="assets/logo.png" width='24'>
            <img alt="Vue logo" src="assets/logo.png" width='24'>
            <img alt="Vue logo" src="assets/logo.png" width='24'>
            <img alt="Vue logo" src="assets/logo.png" width='24'>
            <img alt="Vue logo" src="assets/logo.png" width='24'>
            <img alt="Vue logo" src="assets/logo.png" width='24'>
        </div>
    </div>
    <div class="cards">
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
            </div>
        </div>
        <div class="card">
            <img class="card-img" src="assets/logo.png" width='50' height="50">
            <div class="card-detail">
                <div class="card-name">업적 이름 1</div>
                <div class="card-detail-describe">업적 설명 로럼 잇섭</div>
                <div class="card-detail-line"></div>
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


.badge-title{

}
.badge-imgs{
    display: flex;
    margin: 1px;
}
.badge-imgs img{
    margin: 4px;
}


.card{
    margin:15px;
    border-radius: 10px;
    width: 90vw;
    height: 75px;
    background-color: #d9d9d9;
    display: flex;
}
.card-img{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 12px;
    margin-right: 12px;
}
.card-detail{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
}
.card-name{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: auto;
    font-size: 16px;
}
.card-detail-describe{
    margin-top: auto;
    margin-bottom: auto;
    margin-right: 16px;
    font-size: 14px;
}
.card-detail-line{
    width: 60vw;
    height: 5px;
    background-color: #2F88FF;
    border: 1px solid #151515;
    border-radius: 12px;
}



</style>