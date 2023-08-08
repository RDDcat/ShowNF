<template>
    <div class="content">
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-price">126,000원</div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-price">126,000원</div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-price">126,000원</div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-price">126,000원</div>
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
.item-price{
    padding-left: 4px;
}
</style>