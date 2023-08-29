<template>
    <div class='top' >
        <img alt="Vue logo" src="assets/logo.png" width='32' height="32"  @click="this.$emit('changePage', [true, false, false, false])">
        <div class="top-title">캘린더</div>
        <div class="balance"></div>
    </div>

    <div class="frame">
        <div class="left-arrow">
            <img src="assets/logo.png" width="16" height="16">
        </div>
        <div class="main-frame">
            <img class="main-frame-img" src="assets/logo.png" width="120" height="120">
            <div class="main-frame-img-shadow">
                <img src="assets/logo.png" width="52" height="12">
            </div>
            
            <div class="main-frame-pet-name">최종병기</div>

        </div>
        <div class="right-arrow">
            <img src="assets/logo.png" width="16" height="16">
        </div>
    </div>

    <div class="calender">
        <div class="calender-frame">
            <div class="calender-top">
                <div class="calender-top-left-arrow"><img src="assets/logo.png" width="16" height="16"></div>
                <div class="calender-top-date">2023년 9월</div>
                <div class="calender-top-right-arrow"><img src="assets/logo.png" width="16" height="16"></div>
            </div>
            <div class="calender-contents">
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text"></div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text"></div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text"></div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text"></div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text"></div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">1</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">2</div>
                </div>
                
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">3</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">4</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">5</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">6</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">7</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">8</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">9</div>
                </div>

                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">10</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">11</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">12</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">13</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">14</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">15</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">16</div>
                </div>

                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">10</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">11</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">12</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">13</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">14</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">15</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">16</div>
                </div>

                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">10</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">11</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">12</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">13</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">14</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">15</div>
                </div>
                <div class="calender-content" @click="this.$emit('changePage', [false, false, true, false])">
                    <div class="calender-content-text">16</div>
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
    height: 38px;
}
.balance{
    width: 32px;
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

.calender{
    display: flex;
    width: 100vw;
    height: 46vh;
}
.calender-frame{
    margin: auto;
    width: 97%;
    height: 97%;
    border: 1px solid #ACACB1;
    border-radius: 10px;
}
.calender-top{
    display: flex;
    width: 100%;
    height: 10%;
}
.calender-top-left-arrow{
    margin-left: 16px;
    margin-top: auto;
    margin-bottom: auto;
}
.calender-top-date{
    margin: auto;
}
.calender-top-right-arrow{
    margin-right: 16px;
    margin-top: auto;
    margin-bottom: auto;
}

.calender-contents{
    display: flex;
    flex-wrap : wrap;
    width: 100%;
    height: 90%;
    margin-top: auto;
    margin-bottom: auto;
    
}
.calender-content{
    margin: auto;
    width: 13vw;
    height: 13vw;
    display: flex;
    border-radius: 8px;
    background-color: #f6f6f9;

}
.calender-content-text{
    margin: auto;
    text-align: center;
    position: relative;
    bottom: 2px;
}
</style>