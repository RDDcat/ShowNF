<template> 
    <div class="board">
            <div class="board-title" @click="console.log(data)">
                <div class="board-title-text">{{title}} 게시판</div>
                <div class="board-link"><img src="@/assets/logo.png"></div>
            </div>
            <div class="board-cards">                
                <div class="board-card" v-for="(content, index) in data.content" :key="index">
                    <img src="@/assets/logo.png">
                    <h2 v-if="content.title ">{{ content.title }}</h2>
                    <div class="user-name">백설</div>
                </div>
            </div>
        </div>
</template>
<script>


export default{
    props: {
        title: [],
        data: [],
    },
    components: {

    },
    data(){
        return {
            
        }
    },
    methods: {

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
.board-card{
    margin-top: 4px;
    margin-bottom: 8px;
    margin-right:6px;
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