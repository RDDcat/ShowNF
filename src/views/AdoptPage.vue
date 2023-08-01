<!-- 분양 & shop 페이지 -->
<template>    
    <BannerAdopt/>    
    <CategoryTwoline/>
    <ContentTwoCardPriceTitle/>

    

</template>
<script>
import CategoryTwoline from '../components/CategoryTwoline.vue'
import BannerAdopt from '../components/BannerAdopt.vue'
import ContentTwoCardPriceTitle from '../components/ContentTwoCardPriceTitle.vue'

export default{
    components: {
        BannerAdopt,
        CategoryTwoline,
        ContentTwoCardPriceTitle,
    },
}
</script>
<style scoped>

</style>