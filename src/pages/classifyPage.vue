<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 16:52:58
 -->
<template>
    <div class="box">
      <goback></goback>
        <div class="wrapper">
        <Ul >
            <span ref="downSpan" style="display: none;">
               {{msg}}
            </span>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </Ul>
    </div>

    </div>
</template>
<script>

import axios from 'axios';
import BScroll from 'better-scroll';
import { Switch } from 'mint-ui';
import goback from '../components/goback';
export default {
  name: 'Me',
  data () {
    return {
      dropDown:false,
      msg:"加载中...",
        scroll:null,
        value:false
    }
  },
  components:{
    goback
  },
  mounted(){
       this.scroll = new BScroll('.wrapper',{
            scrollY: true,//开启纵向滚动。
            click: true,
            pullDownRefresh: {
                threshold: 50, // 当下拉到超过顶部 30px 时，触发 pullingDown 事件
            }

        });
        this.scroll.on('pullingDown', () => {
         
         
            this.$refs.downSpan.style.display = "block";
            this.msg="正在刷新";
            setTimeout(()=>{
                this.msg="刷新完成";
                // this. pullDownRefresh=50
                this.$refs.downSpan.style.display = "none";
              },3000)

         
            // this.$refs.downSpan.style.display = "block";
            //   setTimeout(()=>{
            //     this.threshold=0;
            //     this.$refs.downSpan.style.display = "none";
            //   },3000)
            // axios.get()
            // .then(res=>{
            //     this.$refs.downSpan.style.display = "none";
            // })
            // .catch(err=>{
            //     this.$refs.downSpan.style.display = "none";
            // })
        })

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
    width: 95%;
    margin: 0 auto;
    margin-top:.3rem;
}
 .wrapper{
    height: 400px;
    background-color: rgb(148, 22, 22);
    overflow:auto;
}


</style>
