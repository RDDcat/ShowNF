<template>
    <div class='top'>
        <img alt="Vue logo" src="assets/logo.png" width='32' @click='moveBack()'>
        <div class="top-title">설정</div>
        <div class="balance"></div>
    </div>
    <div class="cards">
        <div class="card">
            <div class="card-title">
                <div class="card-title-text">정보공개 범위설정</div>
            </div>
            <div class="card-content">
                <div class="card-content-text">SNS 연동하기</div>
                <img class="card-content-toggle" src="assets/logo.png" width='32'>
            </div>
            <div class="card-content">
                <div class="card-content-text">연동 SNS 외부에 노출하기</div>
                <img class="card-content-toggle" src="assets/logo.png" width='32'>
            </div>
            <div class="card-content">
                <div class="card-content-text">내 관심사만 노출하기</div>
                <img class="card-content-toggle" src="assets/logo.png" width='32'>
            </div>
        </div>
        <div class="card">
            <div class="card-title">
                <div class="card-title-text">내 앨범 공개범위 설정</div>
            </div>
            <div class="card-content">
                <div class="card-content-text">
                    <div class="card-content-text-title">기본설정</div>
                    <div class="card-content-text-detail">내 앨범이 모든사람에게 공개됩니다.</div>
                </div>
                <img class="card-content-toggle" src="assets/logo.png" width='32'>
            </div>
            <div class="card-content">
                <div class="card-content-text">
                    <div class="card-content-text-title">신뢰증명 설정</div>
                    <div class="card-content-text-detail">나와 연관관계를 이룬 사용자에게 앨범이 공개됩니다</div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-content-text">
                    <div class="card-content-text-title">비공개 모드</div>
                    <div class="card-content-text-detail">내 앨범이 모든 사람에게 비공개됩니다.</div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-title">
                <div class="card-title-text">내 앨범 공개범위 설정</div>
            </div>
            <div class="card-content">
                <div class="card-content-text">
                    <div class="card-content-text-title">기본설정</div>
                    <div class="card-content-text-detail">내 앨범이 모든사람에게 공개됩니다.</div>
                </div>
                <img class="card-content-toggle" src="assets/logo.png" width='32'>
            </div>
            <div class="card-content">
                <div class="card-content-text">
                    <div class="card-content-text-title">신뢰증명 설정</div>
                    <div class="card-content-text-detail">나와 연관관계를 이룬 사용자에게 앨범이 공개됩니다</div>
                </div>
            </div>
            <div class="card-content">
                <div class="card-content-text">
                    <div class="card-content-text-title">비공개 모드</div>
                    <div class="card-content-text-detail">내 앨범이 모든 사람에게 비공개됩니다.</div>
                </div>
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


.card{    
    margin-top:2vw;    
    margin-bottom:2vw;
}
.card-title{
    display: flex;
    width: 100vw;
    height: 48px;
    background-color: #d9d9d9;
}
.card-title-text{    
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 16px;
}
.card-content{
    display: flex;    
    height: 46px;
}
.card-content-text{
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 16px;
}
.card-content-toggle{
    
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 16px;
}

.card-content-text-title{
    font-size: 16px;
}
.card-content-text-detail{
    font-size: 10px;
}


</style>