<template>
    <div class="content">
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
        </div>
        <div class="item">
            <img class="item-img" src="../assets/sample.png">
            <div class="item-describes">
                <div class="item-describe">
                    <div class="item-describe-count">1</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
                <div class="item-describe">
                    <div class="item-describe-count">12</div>
                    <img class="item-describe-img" src="../assets/sample.png">
                </div>
            </div>
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
.item-describes{
    display: flex;
    justify-content: flex-end;
}
.item-describe{    
    display: flex;
    margin-right: 4px;
}
.item-describe-count{
    margin-right: 2px;
    font-size: 6px;
}
.item-describe-img{
    width: 12px;
}
</style>