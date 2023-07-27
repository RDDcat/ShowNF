<template>
<nav class="nav">
    <div class="nav-content" v-for="(page, index) in pages" :key="index" @click="movePage(page.link.url)">
        <div>
            <img src="">
            <div>{{ page.link.text }}</div>
        </div>
    </div>
</nav>
</template>
<script>
export default {
    data(){
        return {
            pages: [
            {
            link : {text:'메인', url: '/'},
            pageTitle: 'MainPage'
            },
            {
            link : {text:'입양', url: '/adopt'},
            pageTitle: 'AdoptPage'
            },
            {
            link : {text:'커뮤', url: '/community'},
            pageTitle: 'CommunityPage'
            },
            {
            link : {text:'좋아', url: '/swipe'},
            pageTitle: 'SwipePage'
            },
            {
            link : {text:'마이', url: '/my'},
            pageTitle: 'Mypage'
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
<style>
.nav {
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 8px;
    
    width: 100vw;
}

.nav-content{
    width: 20%;
    
}

</style>