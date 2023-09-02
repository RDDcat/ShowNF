<template>
    <div class="top">
        <div class="balance"></div>
        <div class="top-title">게시글 작성</div>
        <div class="balance"></div>
    </div>
    <div class="title">
        <input v-model="message" placeholder="제목을 입력해 주세요">
    </div>
    <div class="category">
        <div class="category-title">카테고리 선택</div>
        <select v-model="selected">
            <option disabled value="">하나를 선택해주세요..!</option>
            <option>도마뱀</option>
            <option>뱀</option>
            <option>개구리</option>
            <option>거북이</option>
        </select> 
    </div>
    <div class="Add-Content-button">
        <div class="Add-content-button-img">
            <img src="assets/logo.png">
        </div>
        
    </div>

</template>
<script>

</script>
<style scoped>
.top{
    display: flex;
    height: 40px;
}
.top-title{
    font-size: 18px;
    margin: auto;
}
.balance{
    width: 24px;
    margin: 4px;
}

.title{
    margin-top: 4px;
    margin-bottom: 8px;
    margin-left: 2vw;
    margin-right: 2vw;
    
}
.title input{    
    width: 94vw;
    height: 50px;
    border-radius: 5px;
    border: none;
    background-color: #f6f6f6;
}

.category{
    margin: 10px;
}
.category-title{
    font-size: 12px;
    margin-bottom: 6px;
}
.category select{    
    width: 46vw;
    height: 42px;
    border-radius: 6px;
    border: 1px solid #acacb1;
}

.Add-Content-button{
    margin-left: auto;
    margin-right: auto;
    width: 94vw;
    height: 50px;
    border-radius: 4px;
    border: 1px solid #181818;
    background-color: #f6f6f6;
}
.Add-content-button-img{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
}
.Add-content-button-img img{
    margin:auto;
    width: 20px;
    height: 20px;
}


</style>