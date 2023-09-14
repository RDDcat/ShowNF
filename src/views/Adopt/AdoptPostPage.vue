<!-- 분양글 조회 페이지 -->
<template>    
    <!-- 상단 -->
    <div class="top">
        <i class="fa-solid fa-xmark fa-2x top-back" @click="this.$router.go(-1);"></i>
        <div class="top-title">분양게시글</div>
        <div class="balance"></div>
    </div>

    <!-- 이미지 배너 -->
    <div class="images" v-if="data">
        <div class="image" v-for="(content_img, index) in content_imgs" :key="index">
            <img :src="content_img.imageUrl">
        </div>
    </div>

    <!-- 조회 게시글 내용 -->
    <div class="individual">
        <div class="individual-title">제목</div>
        <div class="individual-text">{{data.individual}}</div>
    </div>
    <div class="species">
        <div class="species-first">
            <div class="species-first-title">분류1</div>
            <div class="species-first-text">{{data.firstSpecies}}</div>
        </div>
        <div class="species-second">
            <div class="species-second-title">분류2</div>
            <div class="species-second-text">{{data.secondSpecies}}</div>
        </div>
    </div>
    <div class="birthday">
        <div class="birthday-title">생일</div>
        <div class="birthday-text">{{data.birthday}}</div>
    </div>
    <div class="weight">
        <div class="weight-title">생일</div>
        <div class="weight-text">{{data.weight}}</div>
    </div>
    <div class="memo">
        <div class="memo-title">설명</div>
        <div class="memo-text">{{data.speciesExplain}}</div>
    </div>
    <div class="price">
        <div class="price-title">가격</div>
        <div class="price-text">{{data.price}}</div>
    </div>


    <p>좋아요 : {{data.heartCount}}</p>

    <!-- 하단 플로팅 바 (좋아요, 채팅하기) -->
    <div class="adopt-float">
        <div class="heart">

        </div>
        <div class="link" >
            <div class="link-naver" v-if="data.salePlatform=='Naver'">
                네이버
            </div>
            <div class="link-naver" v-if="data.salePlatform=='Original'">
                채팅하기
            </div>
        </div>
    </div>

</template>
<script>
import apiTest from '@/api/test';

export default {
    components: {

    },
    data(){
        return {
            data: [],
            content_imgs: [],
        }
    },
    methods: {

    },
    mounted(){
        console.log('history.state.saleId: ', history.state.saleId)

        apiTest.getSale(history.state.saleId)
        .then(response=>{
            console.log('response : ', response)
            this.data = response.data;
            this.content_imgs = JSON.parse(response.data.imageUrl);
        })
        .catch(function (e){
            console.log(e);
        });
    }
}
</script>
<style scoped>
.top-back{
    width: 24px;
    margin: 4px;
}
.top{
    display: flex;
    height: 40px;
}
.top-title{
    font-size: 18px;
    margin: auto;
}
.balance{
    width: 24px;
    margin: 4px;
}

.images{
    width: 100vw;
    height: 300px;
    display: flex;
    flex: wrap;
}
.image{
    
}
.image img{
    width: 100vw;
    height: 300px;
    object-fit: cover;
}

.individual{
    margin-left: 12px;    
    margin-bottom: 12px;
    
}
.individual-title{
    margin-top: 8px;
    font-size: 12px;
}
.individual-text{
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
}
.species{    
    display: flex;
    margin-top: 8px;   
    margin-bottom: 8px;   
}
.species-first{
    width: 50vw;
}
.species-first-title{
    margin: 4px;
    margin-left: 12px;    
    font-size: 12px;
}
.species-first-text{
    margin: 4px;
    margin-top: 8px;
    margin-left: 12px;
    font-size: 18px;

}
.species-second{
    width: 46vw;
}
.species-second-title{
    margin: 4px;
    margin-left: 12px;    
    font-size: 12px;

}
.species-second-text{
    margin: 4px;
    margin-top: 8px;
    margin-left: 12px;
    font-size: 18px;
}

.birthday{
    margin-left: 12px;    
    margin-bottom: 12px;
    
}
.birthday-title{
    margin-top: 8px;
    font-size: 12px;
}
.birthday-text{
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
}

.weight{
    margin-left: 12px;    
    margin-bottom: 12px;
    
}
.weight-title{
    margin-top: 8px;
    font-size: 12px;
}
.weight-text{
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
}

.memo{
    margin-left: 12px;    
    margin-bottom: 12px;
    
}
.memo-title{
    margin-top: 8px;
    font-size: 12px;
}
.memo-text{
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 16px;
}

.price{
    margin-left: 12px;    
    margin-bottom: 12px;
    
}
.price-title{
    margin-top: 8px;
    font-size: 12px;
}
.price-text{
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 18px;
}
</style>
