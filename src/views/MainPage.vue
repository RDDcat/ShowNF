<template>
    <div class='top'>
        <img alt="Vue logo" src="../assets/logo.png" width='32'>
    </div>
    <div class='category category-basic'>
        <div class="category-content" v-for="(category, index) in categories" :key="index" @click="console.log(category)">
            <img src="../assets/sample.png" width="44">
            <div class="category-content-text">{{category.text}}</div>
        </div>
    </div>
    <div class='banner'>
        <img class='banner-content' src="../assets/sample.png">

    </div>
    <div class='category-twoline'>
        <div class="category">
            <div class="category-content" v-for="(category, index) in detailCategories_1" :key="index" @click="console.log(category)">
                <img src="../assets/sample.png" width="44">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>
        <div class="category">
            <div class="category-content" v-for="(category, index) in detailCategories_2" :key="index" @click="console.log(category)">
                <img src="../assets/sample.png" width="44">
                <div class="category-content-text">{{category.text}}</div>
            </div>
        </div>        
    </div>
    <div class='content-list'>
        <div class="content" v-for="(content, index) in contents" :key="index">
            <div class="content-title">
                <div>{{content.title}}</div>
                <div class="arrow-link" @click="console.log('이동')"><img src="../assets/sample.png" width="12"></div>
            </div>
            <div class="content-body">
                <img src="../assets/sample.png" width="165" height="195">
                <img src="../assets/sample.png" width="165" height="195">
            </div>
        </div>        
    </div>
</template>
<script>
export default{
    data(){
        return {
            categories: [
                {text: "파충류"},
                {text: "양서류"},
                {text: "곤충"},
                {text: "관상어"},
                {text: "파충류"},
                {text: "양서류"},
                {text: "곤충"},
                {text: "관상어"},
                {text: "파충류"},
                {text: "양서류"},
                {text: "곤충"},
                {text: "관상어"},
            ],
            detailCategories_1:[
                {text: "크레"},
                {text: "레오파드"},
                {text: "밀크 스네이크"},
                {text: "파이썬"},
                {text: "비어디"},
                {text: "육지거북"},
                {text: "밀키프록"},
                {text: "트리프록"},
                {text: "사육용품"},
                {text: "구독"},
                {text: "영양제"},
            ],
            detailCategories_2:[
                {text: "모니터"},
                {text: "테구"},
                {text: "호그노즈"},
                {text: "장수풍뎅이"},
                {text: "비어디"},
                {text: "수생거북"},
                {text: "밀키프록"},
                {text: "팩맨"},
                {text: "사육세트"},
                {text: "먹이"},
            ],
            contents:[
                {title:'최고의 귀염둥이!!'},
                {title:'내 친구를 찾아보자'},
                {title:'설마 여기까지 보겠어?'},
                {title:'설마 여기까지 보겠어22?'},                
                {title:'설마 여기까지 보겠어333?'},
            ]
        }
    },
}

</script>
<style>
.category{
    display: flex;
}

.category-content{
    margin: 8px;
}
.category-content-text{
    font-size: 8px;
    text-align: center;
}

.banner{
    width: 100vw;
}
.banner-content{
    object-fit: cover;
    width: 100%;
    height: 20vh;
}

.content-title{
    display: flex;
}
.content-body{
    display: flex;
}

.arrow-link{
    margin-left: auto;
}

</style>