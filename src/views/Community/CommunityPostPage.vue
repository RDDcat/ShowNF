<template>
    <div class="sample">this page for copy</div>
    <img :src="data.imageUrl">
    {{data.content}}
</template>
<script>

import apiTest from '@/api/test';

export default {
    props: {

    },
    components: {

    },
    data(){
        return {
            data: {},
        }
    },
    methods: {

    },
    created() {
        console.log('history.state.postId: ', history.state.postId)
        apiTest.getPost(history.state.postId)
        .then(response=>{
            console.log("response : ", response);
            this.data = response.data;
        })
        .catch(function (e){
            console.log(e);
        });

    }
}
</script>
<style scoped>



</style>