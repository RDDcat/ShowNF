<!-- 분양 & shop 페이지 -->
<template>
    <div class="top">
        <img class='top-search-icon' src="../assets/sample.png" width="24">
    </div>
    <div class='banner'>
        <img class='banner-content' src="../assets/sample.png">
    <div class='category-twoline'>
        <div class="category">
            <div class="category-content" v-for="(category, index) in detailCategories_1" :key="index" @click="console.log(category)">
                <img src="../assets/sample.png" width="44">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>
        <div class="category">
            <div class="category-content" v-for="(category, index) in detailCategories_2" :key="index" @click="console.log(category)">
                <img src="../assets/sample.png" width="44">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>        
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
    object-fit: cover;
    width: 100%;
    height: 34vh;
}

.category{
    display: flex;
}

.category-content{
    margin: 8px;
}
.category-content-text{
    font-size: 8px;
    text-align: center;
}
</style>