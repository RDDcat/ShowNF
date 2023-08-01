<!-- 분양 & shop 페이지 -->
<template>
    <div class="top">
        <img class='top-search-icon' src="../assets/sample.png" width="24">
    </div>
    <AdoptBanner/>    
    <CategoryTwoline />
    
    <div class="content">
        <div class="content-card">
            <div class="content-card-img"><img class="content-card-imgtag" src="../assets/sample.png"></div>
            <div class="content-card-price">175,000원</div>
            <div class="content-card-title">비어디 드래곤 (bearded dragon)</div>
        </div>
        <div class="content-card">
            <div class="content-card-img"><img class="content-card-imgtag" src="../assets/sample.png"></div>
            <div class="content-card-price">175,000원</div>
            <div class="content-card-title">비어디 드래곤 (bearded dragon)</div>
        </div>
    </div>

</template>
<script>
import CategoryTwoline from '../components/CategoryTwoline.vue'
import AdoptBanner from '../components/AdoptBanner.vue'


export default{
    components: {
        AdoptBanner,
        CategoryTwoline,
    },
}
</script>
<style scoped>
.top-search-icon{
    right: 4px;
    position: absolute;
}


.category{
    display: flex;
}

.category-content{
    margin: 8px;
}

.category-content-imgtag{
    width: 44px;
}

.category-content-text{
    font-size: 8px;
    text-align: center;
}

.content{
    display: flex;
}

.content-card{
    margin: auto;    
}

.content-card-img{
    width: 40vw;
    height: 24vh;
}

.content-card-imgtag{
    width: 100%;
    height: 100%;
}

.content-card-price{
    font-size: 10px;
}

.content-card-title{
    font-size: 8px;
}
</style>