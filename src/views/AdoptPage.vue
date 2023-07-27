<!-- 분양 & shop 페이지 -->
<template>
    <div class="top">
        <img class='top-search-icon' src="../assets/sample.png" width="24">
    </div>
    <div class='banner'>
        <div class='banner-content'>
            <img class='banner-content-imgtag' src="../assets/sample.png">
        </div>
    </div>
    <div class='category-twoline'>
        <div class="category">
            <div class="category-content" v-for="(category, index) in detailCategories_1" :key="index" @click="console.log(category)">
                <img class="category-content-imgtag" src="../assets/sample.png">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>
        <div class="category">
            <div class="category-content" v-for="(category, index) in detailCategories_2" :key="index" @click="console.log(category)">
                <img class="category-content-imgtag" src="../assets/sample.png" >
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>
    </div>
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
export default{
    data(){
        return{
            detailCategories_1:[
                {text: "파충류"},
                {text: "양서류"},
                {text: "풍뎅이"},
                {text: "관상어"},
                {text: "육지거북"},                
                {text: "밀키프록"},
                {text: "트리프록"},
                {text: "사육용품"},
                {text: "구독"},
                {text: "영양제"},
            ],
            detailCategories_2:[
                {text: "모니터"},
                {text: "테구"},
                {text: "호그노즈"},
                {text: "장수풍뎅이"},
                {text: "비어디"},
                {text: "수생거북"},
                {text: "밀키프록"},
                {text: "팩맨"},
                {text: "사육세트"},
                {text: "먹이"},
            ],
        }
    }
}
</script>
<style scoped>
.top-search-icon{
    right: 4px;
    position: absolute;
}

.banner{
    width: 100vw;
}

.banner-content{
    width: 100%;
    height: 34vh;
}

.banner-content-imgtag{
    width: 100%;
    height: 100%;
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