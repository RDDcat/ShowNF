<template>
    <!-- 컴포넌트 변동 -->
    <MyPetMain 
        @changePage='changePage' 
        v-if="pageNumber[0]"/>
    <MyPetCalender 
        @changePage='changePage' 
        v-if="pageNumber[1]"/>
    <MyPetDiary 
        @changePage='changePage' 
        v-if="pageNumber[2]"/>
    <MyPetAddDiary 
        @changePage='changePage' 
        v-if="pageNumber[3]"/>
    <MyPetDiaryBirth 
        @changePage='changePage' 
        v-if="pageNumber[4]"/>
    <!-- 컴포넌트 변동 -->
    
</template>
<script>
import MyPetMain from '@/components/MyPet/MyPetMain.vue'
import MyPetCalender from '@/components/MyPet/MyPetCalender.vue'
import MyPetDiary from '@/components/MyPet/MyPetDiary.vue'
import MyPetAddDiary from '@/components/MyPet/MyPetAddDiary.vue'
import MyPetDiaryBirth from '@/components/MyPet/MyPetDiaryBirth.vue'

export default {
    components:{
        MyPetMain,
        MyPetCalender,
        MyPetDiary,
        MyPetAddDiary,
        MyPetDiaryBirth,

    },
    data(){
        return {
            pageNumber: [true, false, false, false, false],
            pageNumber_explain: ["MyPetMain", "MyPetCalender", "MyPetDiary", "MyPetAddDiary", "MyPetDiaryBirth"]
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