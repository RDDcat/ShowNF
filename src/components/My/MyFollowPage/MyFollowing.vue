<template>
    <div class="followings">
        <div class="following" v-for="user in user_data" :key="user.userid">
            <div class="following-img">
                <img src="@/assets/logo.png">
            </div>
            <div class="following-detail">
                <div class="following-name">{{ user.username }}</div>
                <div class="following-id">{{ user.userid }}</div>
            </div>
            <div class="following-button">
                <div class="following-button-text">팔로잉</div>
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
                username: "하드카이트",
                userid: "@hard_kite"
            },
            {
                username: "이거얼마에요",
                userid: "@whatsinyourback"
            },
            {
                username: "오늘도축제야",
                userid: "@star2wanttoplay"
            },
            {
                username: "plus",
                userid: "@pluss"
            },
            {
                username: "포스트로핏",
                userid: "@postrofit"
            },
            ],
        }
    },
    methods: {

    },
}
</script>
<style scoped>
.followings{
    display: flex;
    flex-direction: column;
}
.following{
    width: 100vw;
    height: 70px;
    display: flex;
}
.following-img{
    display: flex;
    width: 20vw;
    height: 100%;
}
.following-img img{
    margin: auto;
    width: 50px;
    height: 50px;
}
.following-detail{    
    width: 50vw;
    margin-top: auto;    
    margin-bottom: auto;
    margin-left: 2vw;
}
.following-name{
    font-size: 12px;
    margin-bottom: 4px;
}
.following-id{
    font-size: 10px;
    color: #acacb1;
}
.following-button{
    display: flex;
    margin-top: auto;    
    margin-bottom: auto;
    width: 65px;
    height: 30px;
    background-color: #acacb1;
    border-radius: 10px;
}
.following-button-text{
    margin: auto;
    font-size: 12px;

}

</style>