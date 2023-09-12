<template>
    <div class="board">
        {{data}}
            <div class="board-title">
                <div class="board-title-text">HOT 게시글</div>
                <div class="board-link"><img src="@/assets/logo.png"></div>
            </div>
            <div class="board-cards">
                <CommunityContentCard />
                <CommunityContentCard />
                <CommunityContentCard />
                <CommunityContentCard />
            </div>
        </div>
</template>
<script>
import CommunityContentCard from "@/components/CommunityPage/CommunityContentCard.vue";

export default{
    props: {
        data: [],
    },
    components: {
        CommunityContentCard,
    },
}
</script>
<style scoped>
.board{

}
.board-title{
    display: flex;
    margin-top: 4px;
    margin-bottom: 4px;
}
.board-title-text{
    margin-top:auto;
    margin-bottom:auto;
}
.board-cards{    
    overflow: auto;
    display: flex;
}
.board-link{
    width: 32px;
    margin-left: auto;
}
.board-link img{
    width: 100%;
    height: 100%;
    margin: 0;
}
</style>