<template>
  <div id="app">
    <!-- <div>
      <ul>
        <li>
          <router-link :to="{name:'home'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name :'about',params:{id :'123'}}">详情页</router-link>
        </li>
        <li>
          <router-link to="/login">登录</router-link>
        </li>
      </ul>
    </div> -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app ul{
 
}
</style>
