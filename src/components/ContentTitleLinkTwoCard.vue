<template>
    
    <div class="content">
        <div class="content-title">
            <div>{{ content.title }}</div>
            <div class="arrow-link" @click="console.log('이동')"><img src="../assets/sample.png" width="12"></div>
        </div>
        <div class="content-body">
            <img src="../assets/sample.png" width="165" height="195">
            <img src="../assets/sample.png" width="165" height="195">
        </div>
    </div>
</template>
<script>
export default{
    props: ["content"],

}
</script>
<style scoped>
.content-title{
    display: flex;
}

.content-body{
    display: flex;
}
.content-body img{
    margin: auto;
}

.arrow-link{
    margin-left: auto;
}
</style>