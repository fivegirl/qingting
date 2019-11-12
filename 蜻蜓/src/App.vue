<!--
 * @Author: your name
 * @Date: 2019-11-07 10:04:18
 * @LastEditTime: 2019-11-09 20:23:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\三阶段\第三阶段\workspace\蜻蜓\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
html,body{
  height: 100%;
}
body{
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
ul,li,ol{
  list-style: none;
}
img{
  border: 0;
}
input{
  outline: none;
}
a{
  text-decoration: none;
}
#app{
  width:100%;
}
</style>
