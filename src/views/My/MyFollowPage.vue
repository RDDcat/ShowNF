<template>
    <div class="top">
        <img class="top-menu" src="@/assets/logo.png" @click="moveMyPage">
        <div class="top-title">마이페이지</div>
        <div class="balance"></div>
    </div>

    <div class="follow-navs"> 
        <div class="follow-nav">
            <div class="follow-nav-title">팔로워</div>
            <div class="follow-nav-line" v-show="pages[0]"></div>
        </div>
        <div class="follow-nav">
            <div class="follow-nav-title">팔로잉</div>
            <div class="follow-nav-line" v-show="pages[1]"></div>
        </div>
    </div>

    <MyFollower v-if="pages[0]"/>
    <MyFollowing v-if="pages[1]"/>
</template>
<script>
import MyFollower from '@/components/My/MyFollowPage/MyFollower'
import MyFollowing from '@/components/My/MyFollowPage/MyFollowing'

export default {
    components: {
        MyFollower,
        MyFollowing,
    },
    data(){
        return {
            pages: [true, false],
            pages_explain: ["MyFollower", "MyFollowing"]
        }
    },
    methods: {

    },
}
</script>
<style scoped>
.follow-nav{
    width: 100vw;
    height: 50px;
}
.follow-navs{
    display: flex;
}
.follow-nav{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2px;
}
.follow-nav-title{
    margin: auto;
}
.follow-nav-line{
    width: 100%;
    height: 2px;
    background-color: #45454e;
}


.balance{
    width: 24px;
    margin: 4px;
}
.top{
    display: flex;
    height: 40px;
}
.top-title{
    font-size: 18px;
    margin: auto;
}
.top-menu{
    width: 24px;
    margin: 4px;
}


</style>