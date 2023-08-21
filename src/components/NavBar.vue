<template>
<v-bottom-navigation class="nav">
    <div class="nav-content" v-for="(page, index) in pages" :key="index" @click="movePage(page.link.url)">
        <img src="../assets/sample.png" width="32" height="32">
        <div class="nav-content-text">{{ page.link.text }}</div>
    </div>
</v-bottom-navigation>
</template>
<script>
export default {
    data(){
        return {
            pages: [
            {
                link : {text:'홈', url: '/'},
                pageTitle: 'MainPage',
                img: '../assets'
            },
            {
                link : {text:'분양', url: '/adopt'},
                pageTitle: 'AdoptPage',
                img: '../assets'
            },
            {
                link : {text:'커뮤', url: '/community'},
                pageTitle: 'CommunityPage',
                img: '../assets'
            },
            {
                link : {text:'좋아', url: '/swipe'},
                pageTitle: 'SwipePage',
                img: '../assets'
            },
            {
                link : {text:'마이펫', url: '/pet'},
                pageTitle: 'SwipePage',
                img: '../assets'
            },
            {
                link : {text:'마이', url: '/my/main'},
                pageTitle: 'Mypage',
                img: '../assets'
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
    position: fixed;
    bottom: 0;
    background-color: white;
    
    width: 100vw;
}

.nav-content{
    justify-content: center;
    margin-top: 8px;
    width: 20%;
    text-align: center;
}

.nav-content-text{
    font-size: 12px;
}

</style>