<template>
    <!-- 컴포넌트 변동 -->
    <MyPetMain 
        @changePage='changePage' 
        v-if="pageNumber[0]"/>
    <MyPetCalender 
        @changePage='changePage' 
        v-if="pageNumber[1]"/>
    <MyPetDiary v-if="pageNumber[2]"/>
    <MyPetAddDiary v-if="pageNumber[3]"/>
    <!-- 컴포넌트 변동 -->
    
</template>
<script>
import MyPetMain from '@/components/MyPet/MyPetMain.vue'
import MyPetCalender from '@/components/MyPet/MyPetCalender.vue'
import MyPetDiary from '@/components/MyPet/MyPetDiary.vue'
import MyPetAddDiary from '@/components/MyPet/MyPetAddDiary.vue'

export default {
    components:{
        MyPetMain,
        MyPetCalender,
        MyPetDiary,
        MyPetAddDiary,

    },
    data(){
        return {
            pageNumber: [true, false, false, false],
        }
    },
    methods: {
        changePage(pageNumber){
            this.pageNumber = pageNumber;
        },
        movePage(url){
            this.$router.push(url);
        },
        moveBack(){
            this.$router.go(-1);
        },
    },
}


</script>
<style scoped>


</style>