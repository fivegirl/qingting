<!--
 * @Author: your name
 * @Date: 2019-11-07 10:04:18
 * @LastEditTime: 2019-11-15 13:27:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day13e:\三阶段\第三阶段\workspace\蜻蜓\src\App.vue
 -->
<template>
  <div id="app">
    <router-view/>
    <div class="fixplay">
        <playbutton class="none"></playbutton>
    </div>
  </div>
</template>

<script>
import playbutton from './components/playbutton';
export default {
  name: 'App',
  components:{
    playbutton
  }
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
.fixplay{
    position: fixed;
    background: skyblue;
    right: 0rem;
    bottom: 2.3rem;
    width: .6rem;
    height: .5rem;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    overflow: hidden;
    border: 2px solid #fcfefd;
    box-shadow: 0 0 5px gray;
}
.fixplay img{
    width: 100%;
    height: 100%;
    opacity: .8;
    z-index: 0;
    position: absolute;
    left: 0;
    bottom: 0;
}
</style>
