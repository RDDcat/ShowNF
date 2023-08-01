<template>
    <div class='category category-basic'>
        <div class="category-content" v-for="(category, index) in categories" :key="index" @click="console.log(category)">
            <img src="../assets/sample.png" width="44">
            <div class="category-content-text">{{category.text}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            categories: [
                {text: "파충류"},
                {text: "양서류"},
                {text: "곤충"},
                {text: "관상어"},
                {text: "파충류"},
                {text: "양서류"},
                {text: "곤충"},
                {text: "관상어"},
                {text: "파충류"},
                {text: "양서류"},
                {text: "곤충"},
                {text: "관상어"},
            ],
        }
    },
}
</script>
<style scoped>
.category{
    overflow: auto;
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