<template>
    <div class='top' >
        <img alt="Vue logo" src="assets/logo.png" width='32' @click='moveBack()'>
        <div class="top-title">포인트 내역</div>        
        <div class="balance"></div>
    </div>
    <div class="card">

    </div>
    <div class="histories">
        <div class="histories-title">이용내역</div>
        <div class="history">
            
        </div>
        <div class="history">
            
        </div>
        <div class="history">
            
        </div>
    </div>
</template>
<script>


export default{
    components: {
        
    },
    data(){
        return {
            isMenu : false,
            contents: [],
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
        moveBack(){
            this.$router.go(-1);
        },
    },
};
</script>
<style scoped>
.top{
    display: flex;
    height: 40px;
}
.top-title{
    margin: auto;
    justify-content: center;
}
.balance{
    width: 32px;
}

.card{    
    margin:15px;
    border-radius: 10px;
    width: 90vw;
    height: 210px;
    background-color: #d9d9d9;
}

.histories-title{
    margin-left: 20px;
}

.history{
    margin:15px;
    border-radius: 10px;
    width: 90vw;
    height: 70px;
    background-color: #d9d9d9;
}
</style>