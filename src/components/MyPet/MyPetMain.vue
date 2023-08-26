<template>
    <div class="pet-cards">
        <div class="pet-card">
            <div class="pet-card-frame" @click="this.$emit('pageNumber', [false, true, false, false])">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="movePage('/pet/calender')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="movePage('/pet/calender')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="movePage('/pet/calender')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="movePage('/pet/add')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                    plus
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            
        }
    },
    methods: {
        movePage(url){
            this.$router.push(url);
        },
    },
}


</script>
<style scoped>
.pet-cards{
    display: flex;
    flex-wrap : wrap;
}
.pet-card{
    display: flex;
    width: 33vw;
    height: 33vw;
}
.pet-card-frame{
    display: flex;
    width: 30vw;
    height: 30vw;
    margin:auto;
    border-radius: 8px;
    border: 1px solid #d6d6d6;
}
.pet-card-img{
    margin:auto;
}
</style>