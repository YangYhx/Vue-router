<template>
    <div class="container">
        <div class="header">
            <h1>首页</h1>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <router-link :to="{name:'home1'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{name:'about1',param:{id:'13'}}">详情</router-link>
                </li>
                <li>
                    <router-link :to="{name:'login1'}">登录</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>

    </div>
</template>
<script>
export default {
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    
}
.header{
    text-align: center;
    margin-left: 100px;
    height: 80px;
    background: #333;
    vertical-align: middle;
}
.nav{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100px;
    background: #958;
    text-align: center;
    vertical-align: middle;
}
.nav ul{
    margin: 0;
}
.nav ul li{
    list-style: none;
    margin-top:100px;
    margin-left: 30px;
    color: #fff; 
}
.content{
    position: absolute;
    top: 80px;
    left: 100px;
    width: 100%;
    height: 100%;
    background: #782;
    text-align: center;
    vertical-align: middle;
}
</style>
