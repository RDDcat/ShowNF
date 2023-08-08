<template>
<v-bottom-navigation class="nav">
    <div class="nav-content" v-for="(page, index) in pages" :key="index" @click="movePage(page.link.url)">
        <div>{{ page.link.text }}</div>
    </div>
</v-bottom-navigation>
</template>
<script>
export default {
    data(){
        return {
            pages: [
            {
                link : {text:'홈', url: '/my/main'},
                pageTitle: 'main',
            },
            {
                link : {text:'입양', url: '/my/adopt'},
                pageTitle: 'adopt',
            },
            {
                link : {text:'커뮤', url: '/my/album'},
                pageTitle: 'album',
            },
            {
                link : {text:'좋아', url: '/my/dealing'},
                pageTitle: 'dealing',
            },
        ]
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
    },
}
</script>
<style scoped>
.nav {
    display: flex;
    justify-content: center;
    background-color: white;
    width: 100vw;
}

.nav-content{
    justify-content: center;
    margin-top: 8px;
    width: 25%;
    text-align: center;
}

</style>