<template>
    <div class="followers">
        <div class="follower">
            <div class="follower-img">
                <img src="@/assets/logo.png">
            </div>
            <div class="follower-detail">
                <div class="follower-name"></div>
                <div class="follower-id"></div>
            </div>
        </div>
    </div>

</template>
<script>


export default {
    components: {

    },
    data(){
        return {

        }
    },
    methods: {

    },
}
</script>
<style scoped>
.followers{
    display: flex;
}
.follower{
    width: 100vw;
    display: flex;
}
.follower-img{
    width: 20vw;
    height: 100%;
}
.follower-img img{
    width: 100%;
    height: 100%;
}
.follower-detail{

}
.follower-name{

}
.follower-id{

}

</style>