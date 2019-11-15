<!--
 * @Author: your name
 * @Date: 2019-11-09 10:51:33
 * @LastEditTime: 2019-11-15 12:15:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \myjsonservere:\千峰学习\第三阶段\workspace\myqing\src\pages\playpage.vue
 -->
<template>
    <div class="box">
        <playtop class="head"></playtop>
        <div class="center">
          <playdec></playdec>
          <playimg></playimg>
          <playmain></playmain>
          <playcoll></playcoll>
          <playtui></playtui>
          <playlist></playlist>
          <playmore></playmore>
          <playcomtop class="all"></playcomtop>
          <!-- <playcom></playcom>
          <playcom></playcom>
          <playcom></playcom> -->
        </div>
        <!-- <playbom class="foot"></playbom> -->
    </div>
</template>
<script>
import playtop from "../components/playtop"
import playdec from "../components/playdec"
import playimg from "../components/playimg"
import playmain from "../components/playmain"
import playcoll from "../components/playcoll"
import playtui from "../components/playtui"
import playlist from "../components/playlist"
import playmore from "../components/playmore"
import playcomtop from "../components/playcomtop"
// import playcom from "../components/playcom"
// import playbom from "../components/playbom"

export default {
  name: 'playpage',
	// props:['goodName'],
  data () {
    return {
      
    }
  },
  components:{
      playtop,playdec,playimg,playmain,playcoll,playtui,playlist,
      playmore,playcomtop
  }
}
</script>
<style scoped>
.box{
    width:100%;
    /* position:relative; */
    /* background-color:#f8efef; */
}
.foot{
  position:fixed;
  left:0;
  top:5.96rem;
  background-color:white;
  z-index: 10;
}
.head{
  position:fixed;
  left:0;
  top:0;
  z-index: 10;

}
.all{
  padding-top:.3rem;
}
.center{
  /* flex: 1; */
  overflow-y: auto;
}
</style>