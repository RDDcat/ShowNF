<!-- 커뮤니티 페이지 -->
<template>
    <div class="contents">
        <ContentBoard/>
    </div>

</template>
<script>
import ContentBoard from '../components/ContentBoard.vue'

export default{
    components: {
        ContentBoard,
    },
    data(){
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
};
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