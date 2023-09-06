<template>
    <div class="followers">
        <div class="follower" v-for="user in user_data" :key="user.userid">
            <div class="follower-img">
                <img src="@/assets/logo.png">
            </div>
            <div class="follower-detail">
                <div class="follower-name">{{ user.username }}</div>
                <div class="follower-id">{{ user.userid }}</div>
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
            user_data: [{
                username: "백설공주",
                userid: "@snow_white23"
            },
            {
                username: "요놈물건이네",
                userid: "@yonom24"
            },
            {
                username: "요놈물건이네",
                userid: "@yonom24"
            },
            {
                username: "요놈물건이네",
                userid: "@yonom24"
            },
            ],
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
    height: 70px;
    display: flex;
}
.follower-img{
    display: flex;
    width: 20vw;
    height: 100%;
}
.follower-img img{
    margin: auto;
    width: 50px;
    height: 50px;
}
.follower-detail{    
    width: 78vw;
    margin-top: auto;    
    margin-bottom: auto;
    margin-left: 2vw;
}
.follower-name{
    font-size: 12px;
    margin-bottom: 4px;
}
.follower-id{
    font-size: 10px;
    color: #acacb1;
}

</style>