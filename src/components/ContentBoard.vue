<template>
    <div class="board">
            <div class="board-title">
                <div class="board-title-text">HOT 게시글</div>
                <div class="board-link"><img src="../assets/sample.png"></div>
            </div>
            <div class="board-cards">
                <BoardCard/>
            </div>
        </div>
</template>
<script>
import BoardCard from "../components/small/BoardCard.vue";

export default{
    components: {
        BoardCard,
    },
}
</script>

<style scoped>
.board{
    overflow: auto;
}
.board-title{
    display: flex;
}
.board-cards{    
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