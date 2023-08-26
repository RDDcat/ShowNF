<template>
    <TopMain/>
    <CategoryBasic />
    <BannerMain />
    <CategoryTwoline />
    <ContentTitleLinkTwoCard v-for="(content, index) in contents" :key="index" :content="content"/>
    
</template>
<script>
import TopMain from '@/components/MainPage/TopMain.vue'
import CategoryBasic from '@/components/MainPage/CategoryBasic.vue'
import BannerMain from '@/components/MainPage/BannerMain.vue'
import CategoryTwoline from '@/components/MainPage/CategoryTwoline.vue'
import ContentTitleLinkTwoCard from '@/components/MainPage/ContentTitleLinkTwoCard.vue'

export default{
    components: {
        TopMain,
        CategoryBasic,
        BannerMain,
        CategoryTwoline,
        ContentTitleLinkTwoCard,
    },
    data(){
        return {
            contents: [],
        }
    },
    methods: {
        getContents(){
            const dummyContents = [
                {title:'최고의 귀염둥이!!'},
                {title:'내 친구를 찾아보자'},
                {title:'새로운 타이틀 1'},
                {title:'새로운 타이틀 22'},                
                {title:'설마 여기까지 보겠어 333?'},
            ]

            return dummyContents;
        }
    },
    mounted() {
        console.log(this.contents);
        this.contents = this.getContents();
        console.log(this.contents);
    },
};

</script>
<style scoped>


</style>