<template>
    <div class="xp">
        <div class="xp-state">진화 [72/100] </div>
        <div class="xp-level-now">알</div>
        <div class="xp-line"></div>
        <div class="xp-level-next">크레</div>
    </div>
</template>
<script>
</script>
<style scoped>
.xp{
    display: flex;
    border-bottom: 1px solid #f6f6f6;
}
.xp-state{
    margin: auto;
    font-size: 8px;
}
.xp-level-now{
    margin: auto;
    font-size: 6px;
    background-color: #f6f6f6;
    width: 6vw;
    text-align: center;
}
.xp-line{
    width: 64vw;
    height: 2px;
    border-radius: 10px;
    border: 1px solid #000;
    margin: auto;
}
.xp-level-next{
    margin: auto;
    font-size: 6px;
    background-color: #f6f6f6;
    width: 6vw;
    text-align: center;
}

</style>