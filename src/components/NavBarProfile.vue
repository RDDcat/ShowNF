<template>
    <v-bottom-navigation class="nav">
        <div class="nav-content" v-for="(page, index) in pages" :key="index" @click="movePage(page.link.url, $event);">
            <div>{{ page.link.text }}</div>
        </div>
    </v-bottom-navigation>
</template>
<script>
export default {
    data(){
        return {
            pageNumber: 0,
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
        movePage(url, event){
            this.$router.push(url);
            console.log(event);
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
    margin-top: 6px;
    margin-bottom: 4px;
    width: 25%;
    text-align: center;
    border-radius: 10;
    margin-right: 2vw;
    margin-left: 2vw;
}

</style>