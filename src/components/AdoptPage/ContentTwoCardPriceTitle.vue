<template>
    <div class="content">
        <div class="content-card" v-for="(content,index) in contents" :key="index" @click="moveSalePage(content.saleId)">
            <div class="content-card-img"><img class="content-card-imgtag" :src="JSON.parse(content.imageUrl)[0].imageUrl"></div>
            <div class="content-card-price">{{content.price}}</div>
            <div class="content-card-title">{{content.individual}}</div>
        </div>
    </div>
</template>
<script>
import apiTest from '@/api/test';

export default {
    components: {

    },
    data(){
        return {
            data: [],
            contents: [],
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
        moveSalePage(_saleId){
            this.$router.push({
                path : '/adopt/post' ,
                state : {
                    saleId : _saleId, 
                }
            })
        },
    },
    beforeCreate(){
        apiTest.getSales()
        .then(response=>{
            this.data = response.data;
            this.contents = response.data.content;
            
        })
        .catch(function (e){
            console.log(e);
        });

    },
}
</script>
<style scoped>
.content{
    display: flex;
    flex-wrap: wrap;
}

.content-card{
    margin: auto;    
    margin-top: 8px;
}

.content-card-img{
    width: 40vw;
    height: 24vh;
}

.content-card-imgtag{
    width: 100%;
    height: 100%;
}

.content-card-price{
    font-size: 10px;
}

.content-card-title{
    font-size: 8px;
}
</style>