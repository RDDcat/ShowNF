<template>
    <div class="filters">
        <div class="filter">
            <img class="filter-img" src="assets/logo.png">
            <div class="filter-text">입양</div>
        </div>
        <div class="filter">
            <img class="filter-img" src="assets/logo.png">
            <div class="filter-text">분양</div>
        </div>
        <div class="filter">
            <img class="filter-img" src="assets/logo.png">
            <div class="filter-text">CITES 인증</div>
        </div>
    </div>
    <div class="content">
        <div class="card">
            <div class="card-left">
                <img class="card-img" src="assets/logo.png">
            </div>
            <div class="card-right">
                <div class="card-title">
                    <div class="card-title-text">제목 레오파드</div>
                    <div class="card-title-username">닉네임 다크 판타지</div>
                </div>
                <div class="card-review">
                    <div class="card-review-title">후기</div>
                    <div class="card-review-user">
                        <img class="card-review-user-img" src="assets/logo.png">
                        <div class="card-review-username">닉네임 백설</div>
                    </div>
                    <div class="card-review-text">
                        리뷰 텍스트 나에게 준비된 최고의 선물
                    </div>
                    <div class="card-review-star">
                        <div class="card-review-star-text">별점</div>
                        <div>
                            <img class="card-review-star-img" src="assets/logo.png">
                            <img class="card-review-star-img" src="assets/logo.png">
                            <img class="card-review-star-img" src="assets/logo.png">
                            <img class="card-review-star-img" src="assets/logo.png">
                            <img class="card-review-star-img" src="assets/logo.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.filters{
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
    margin-bottom: 4px;
}
.filter{
    display: flex;
    justify-content: flex-end;
}
.filter-img{
    width: 12px;
    margin-right: 2px;
}
.filter-text{
    font-size: 8px;
    margin-right: 6px;
}

.card{
    display: flex;
}
.card-img{
    width: 30vw;
}

.card-right{
    width: 100%;
}
.card-title{
    display: flex;
    width: 100%;
}
.card-title-text{
    font-size: 16px;
    margin-right: auto;
}
.card-title-username{
    font-size: 10px;
    margin: 4px;
}

.card-review{
    margin: 8px;
    border: 1px solid #d4d4d4;
    border-radius: 8px;
    background: #f5f5f5;
}
.card-review-title{
    font-size: 10px;
}
.card-review-user{
    display: flex;
}
.card-review-user-img{
    width: 16px;
}
.card-review-username{
    font-size: 8px;
}
.card-review-text{
    font-size: 8px;
}

.card-review-star{
    display: flex;
}
.card-review-star-text{
    font-size: 8px;
}
.card-review-star-img{
    width: 24px;
}
</style>