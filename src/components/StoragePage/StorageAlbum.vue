<template>
    <div class='contents'>
        <div class="content">
            <img class="content-img" src="@/assets/logo.png" @click="openImageModal">
        </div>
        <div class="content">
            <img class="content-img" src="@/assets/logo.png" @click="openImageModal">
        </div>        
        <div class="content">
            <img class="content-img" src="@/assets/logo.png" @click="openImageModal">
        </div>
        <div class="content">
            <img class="content-img" src="@/assets/logo.png" @click="openImageModal">
        </div>        
        <div class="content">
            <img class="content-img" src="@/assets/logo.png" @click="openImageModal">
        </div>
    </div>
    <StorageImageModal 
        @closeImageModal='imageModal=false' 
        v-if="imageModal" />
</template>
<script>
import StorageImageModal from '@/components/StoragePage/StorageImageModal.vue'


export default {    
    components:{
        StorageImageModal,
    },
    data(){
        return {
            imageModal: false,
        }
    },
    methods: {
        openImageModal(){
            this.imageModal = true;
        },
    },
}
</script>
<style scoped>
.contents{
    display: flex;
    flex-wrap: wrap;
}
.content{
    margin: 3vw;
}
.content-img{
    width: 44vw;
    border-radius: 10px;
    
}
</style>