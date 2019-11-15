<!--
 * @Author: your name
 * @Date: 2019-11-09 19:36:16
 * @LastEditTime: 2019-11-10 13:22:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓\src\components\adver.vue
 -->
<template>
    <div class="adver">
        <div class="advermain">
            <div class="adver_box">
                <span class="new">NEW</span>
                <p>会员人气听</p>
                <p>最IN短音频 刷到上瘾</p>
                <img src="../assets/adver_1.jpg" alt="">
            </div>
            <div class="adver_box adver_box2">
                <p>超级会员榜</p>
                <p>神作·大咖需尽欢</p>
                <img src="../assets/adver_2.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.adver{
    width: 100%;
    height: .78rem;
    background:linear-gradient(to bottom,#fffffb 0%,#fffaf4 35%,#fff8ed 66%,#fef7e5 100%);
}
.advermain{
    display: flex;
    width: 92%;
    justify-content: space-between;
    margin: 0 auto;
}
.adver_box{
    width: 1.67rem;
    height: .62rem;
    border-radius: 9px;
    border: 1px solid #dad381;
}
.adver_box2 p:first-child{
    margin-top: .15rem;
}
.new{
    display: block;
    width: .3rem;
    height: .15rem;
    text-align: center;
    line-height: .15rem;
    background: #fe5c60;
    font-size: .03rem;
    color: #fff0e6;
    border-top-left-radius: 9px;
    border-bottom-right-radius: 9px;
}
.adver_box p{
    float: left;
    font-size: .15rem;
    color: #753f00;
    margin-left: .08rem;
    width: 1.13rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.adver_box p:last-of-type{
    font-size: .08rem;
    color: #a6a6a6;
}
.adver_box img{
    margin-left: .08rem;
    width: .37rem;
    height: .38rem;
}
.adver_box2 img{
    margin-top: 10px;
    margin-left: .05rem;
}
</style>