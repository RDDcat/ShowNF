<template>
    <TopMain/>
    <CategoryBasic />
    <BannerMain />
    <CategoryTwoline />
    <div class='content-list'>
        <div class="content" v-for="(content, index) in contents" :key="index">
            <div class="content-title">
                <div>{{content.title}}</div>
                <div class="arrow-link" @click="console.log('이동')"><img src="../assets/sample.png" width="12"></div>
            </div>
            <div class="content-body">
                <img src="../assets/sample.png" width="165" height="195">
                <img src="../assets/sample.png" width="165" height="195">
            </div>
        </div>
    </div>
</template>
<script>
import TopMain from '../components/TopMain.vue'
import CategoryBasic from '../components/CategoryBasic.vue'
import BannerMain from '../components/BannerMain.vue'
import CategoryTwoline from '../components/CategoryTwoline.vue'

export default{
    components: {
        TopMain,
        CategoryBasic,
        BannerMain,
        CategoryTwoline,
    },
    data(){
        return {
            contents:[
                {title:'최고의 귀염둥이!!'},
                {title:'내 친구를 찾아보자'},
                {title:'설마 여기까지 보겠어?'},
                {title:'설마 여기까지 보겠어22?'},                
                {title:'설마 여기까지 보겠어333?'},
            ]
        }
    },
}

</script>
<style scoped>



.content-title{
    display: flex;
}
.content-body{
    display: flex;
}

.arrow-link{
    margin-left: auto;
}

</style>