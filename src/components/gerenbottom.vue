<!--
 * @Author: your name
 * @Date: 2019-11-12 17:05:52
 * @LastEditTime: 2019-11-12 20:00:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓e:\三阶段\第三阶段\workspace\qingting\src\components\gerenbottom.vue
 -->
<template>
    <div>
        <ul class="gerenul_top">
            <li>
                <img src="../assets/qingtingbi.jpg" alt=""><br>
                <span>蜻蜓币</span>
            </li>
            <li>
                <img src="../assets/jindou.jpg" alt=""><br>
                <span>金豆豆</span>
            </li>
            <li>
                <img src="../assets/yigou.jpg" alt=""><br>
                <span>已购项目</span>
            </li>
            <li>
                <img src="../assets/youhuiquan.jpg" alt=""><br>
                <span>优惠券</span>
            </li>
        </ul>
        <div class="grbanner">
            <img src="../assets/gerenbanner.jpg" alt="">
        </div>
        <ul class="gerenul_bottom">
            <li>
                <span>积分商城</span>
                <i class="el-icon-arrow-right"></i>
                <span class="two">积分兑好礼</span>
            </li>
            <li>
                <span>夜间模式</span>
                <el-switch
                    v-model="value"
                    active-color="skyblue"
                    inactive-color="#ebe9ec" class="yejian">
                </el-switch>
            </li>
            <li>
                <span>定时关闭</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>青少年模式</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>预约</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>任务中心</span>
                <i class="el-icon-arrow-right"></i>
                <span class="two">做任务领现金</span>
            </li>
            <li>
                <span>我要当主播</span>
                <i class="el-icon-arrow-right"></i>
                <span class="two">申请成为主播</span>
            </li>
            <li>
                <span>帮助与反馈</span>
                <i class="el-icon-arrow-right"></i>
            </li>
            <li>
                <span>设置</span>
                <i class="el-icon-arrow-right"></i>
            </li>
        </ul>
        <div class="grlast">
            <span></span>
            <span>发现</span>
            <span></span>
        </div>
        <ul class="gerenul_last">
            <li>
                <img src="../assets/hulianwang.jpg" alt=""><br>
                <span>互联网专区</span>
            </li>
            <li>
                <img src="../assets/yunyingshang.jpg" alt=""><br>
                <span>运营商专区</span>
            </li>
            <li>
                <img src="../assets/zhonghongbao.jpg" alt=""><br>
                <span>天天种红包</span>
            </li>
        </ul>
        <div class="lastimg">
            <img src="../assets/geren_last.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        value: false
      }
    }
}
</script>
<style scoped>
.gerenul_top{
    width: 92%;
    height: .89rem;
    margin: 0 auto;
    display: flex;
    padding: 0 .12rem;
    box-sizing: border-box;
    justify-content: space-between;
}
.gerenul_top li{
    text-align: center;
    margin-top: .14rem;
}
.gerenul_top li img{
    width: .2rem;
    height: .2rem;
}
.gerenul_top li span{
    font-size: .12rem;
    color: #919191;
    text-align: center;
}
.grbanner{
    width: 92%;
    height: .9rem;
    margin: 0 auto;
}
.grbanner img{
    width: 100%;
    height: 100%;
}
.gerenul_bottom{
    width: 92%;
    margin: 0 auto;
    padding-top: .1rem;
}
.gerenul_bottom li{
    height: .54rem;
    line-height: .54rem;
    margin-left: .15rem;
    margin-right: .14rem;
}
.gerenul_bottom li span:first-child{
    font-size: .15rem;
    color: #4e4e4e;
}
.gerenul_bottom li .two{
    float: right;
    font-size: .12rem;
    color: #979797;
}
.gerenul_bottom li i{
    font-size: .1rem;
    color: #979797;
    float: right;
    margin-top: .22rem;
}
.gerenul_bottom .yejian{
    float: right;
    margin-top: .17rem;
}
.gerenul_bottom li:nth-last-of-type(3){
    border-bottom: 1px solid #ebebeb;
}
.grlast{
    width: 92%;
    margin: 0 auto;
    padding-top: .3rem;
}
.grlast span{
    display: inline-block;
    width: 1.42rem;
    border-top: 1px solid #ebebeb;
    margin-bottom: .07rem;
}
.grlast span:nth-child(2){
    width: .52rem;
    text-align: center;
    font-size: .16rem;
    color: #4b4b4b;
    border-top: none;
    margin-bottom: 0;
}
.gerenul_last{
    width: 92%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    padding-top: .2rem;
}
.gerenul_last li{
    margin-right: .31rem;
}
.gerenul_last img{
    width: .44rem;
    height: .35rem;
}
.gerenul_last span{
    font-size: .12rem;
    color: #898989;
}
.lastimg{
    width: 92%;
    margin: 0 auto;
    text-align: center;
}
.lastimg img{
    width: 2.13rem;
    height: .57rem;
    margin-top: .38rem;
    margin-bottom: .4rem;
}
</style>