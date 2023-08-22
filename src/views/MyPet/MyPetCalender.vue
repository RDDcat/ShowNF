<template>
    <div class="calender">
        <div class="calender-frame">
            <div class="calender-top">
                <div class="calender-top-left-arrow"><img src="assets/logo.png" width="16" height="16"></div>
                <div class="calender-top-date">2023년 9월</div>
                <div class="calender-top-right-arrow"><img src="assets/logo.png" width="16" height="16"></div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
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
}
.calender-top-left-arrow{
    margin-left: 16px;
    margin-top: 10px;
}
.calender-top-date{
    margin: auto;
}
.calender-top-right-arrow{
    margin-right: 16px;
    margin-top: 10px;
}
</style>