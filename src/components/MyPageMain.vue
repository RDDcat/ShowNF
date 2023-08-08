<template>
    <div class="content">
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.content{
    display: flex;
    flex-wrap:wrap;
}
.item{
    width: 33vw;
}
.item-img{
    object-fit: contain;
    width: 33vw;
    height: 33vw;
}
</style>