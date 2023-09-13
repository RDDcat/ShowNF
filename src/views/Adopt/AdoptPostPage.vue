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
    {{content_imgs}}

    <!-- 하단 플로팅 바 (좋아요, 채팅하기) -->

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

}
</style>