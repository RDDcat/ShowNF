<template>
    <div class='category-twoline'>
        <div class="category">
            <div class="category-content" v-for="(category, index) in CategoriesTop" :key="index" @click="console.log(category)">
                <img src="@/assets/sample.png" width="44">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>
        <div class="category">
            <div class="category-content" v-for="(category, index) in CategoriesBottom" :key="index" @click="console.log(category)">
                <img src="@/assets/sample.png" width="44">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    data(){
        return {
            CategoriesTop:[
                {text: "크레"},
                {text: "레오파드"},
                {text: "밀크 스네이크"},
                {text: "파이썬"},
                {text: "비어디"},
                {text: "육지거북"},
                {text: "밀키프록"},
                {text: "트리프록"},
                {text: "사육용품"},
                {text: "구독"},
                {text: "영양제"},
            ],
            CategoriesBottom:[
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
    },
}
</script>
<style scoped>
.category-twoline{    
    overflow: auto;
}
.category{
    display: flex;
    scrollbar-width: none;
}

.category-content{
    margin: 8px;
}

.category-content-text{
    font-size: 8px;
    text-align: center;
}


</style>