<template>
    <div class="pet-cards">
        <div class="pet-card">
            <div class="pet-card-frame" @click="console.log('ASdf1')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="console.log('ASdf2')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="console.log('ASdf3')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="console.log('ASdf4')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
                </div>
            </div>
        </div>
        <div class="pet-card">
            <div class="pet-card-frame" @click="console.log('ASdf5')">
                <div class="pet-card-img">
                    <img src="assets/logo.png" width="56" height="56">
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
.top{
    display: flex;
}
.top-title{
    margin: auto;
    margin-top: 1vh;
    justify-content: center;
    font-size: 20px;
    height: 40px;
}

.frame{
    display: flex;
    height: 36vh;
    border: 1px solid rgb(166, 168, 175);

}
.main-frame{
    display: flex;
    flex-direction: column;
    margin:auto;
}
.main-frame-img{
    z-index: 99;
}
.main-frame-img-shadow{
    position: relative;
    top: auto;
    left: auto;
    bottom: 10px;
    right: auto;
    text-align: center;
}
.main-frame-pet-name{
    position: relative;
    top: 4vh;
    left: auto;
    bottom: auto;
    right: auto;
    text-align: center;
}



.left-arrow{
    margin-left: 1.5vw;
    margin-top: auto;
    margin-bottom: auto;
}
.right-arrow{
    margin-right: 1.5vw;
    margin-top: auto;
    margin-bottom: auto;
}

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