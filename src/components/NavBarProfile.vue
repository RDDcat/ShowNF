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
                link : {text:'내 게시글', url: '/my/main'},
                pageTitle: 'main',
            },
            {
                link : {text:'분양', url: '/my/adopt'},
                pageTitle: 'adopt',
            },
            {
                link : {text:'내 앨범', url: '/my/album'},
                pageTitle: 'album',
            },
            {
                link : {text:'거래 내역', url: '/my/dealing'},
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