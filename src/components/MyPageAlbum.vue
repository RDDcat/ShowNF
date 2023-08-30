<template>
    <div class="filters">
        <div class="filter">
            <img class="filter-img" src="assets/logo.png">
            <div class="filter-text">게시글</div>
        </div>
        <div class="filter">
            <img class="filter-img" src="assets/logo.png">
            <div class="filter-text">사진</div>
        </div>
    </div>
    <div class="content">
        <div class="item">
            <img class="item-img" src="assets/logo.png">
        </div>
        <div class="item">
            <img class="item-img" src="assets/logo.png">
        </div>
        <div class="item">
            <img class="item-img" src="assets/logo.png">
        </div>
        <div class="item">
            <img class="item-img" src="assets/logo.png">
        </div>
        <div class="item">
            <img class="item-img" src="assets/logo.png">
        </div>
        <div class="item">
            <img class="item-img" src="assets/logo.png">
        </div>
    </div>
</template>
<script>
</script>
<style scoped>
.filters{
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
    margin-bottom: 4px;
}
.filter{
    display: flex;
    justify-content: flex-end;
}
.filter-img{
    width: 12px;
    margin-right: 2px;
}
.filter-text{
    font-size: 8px;
    margin-right: 6px;
}

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