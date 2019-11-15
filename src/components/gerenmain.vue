<!--
 * @Author: your name
 * @Date: 2019-11-12 16:14:02
 * @LastEditTime: 2019-11-12 21:17:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \蜻蜓e:\三阶段\第三阶段\workspace\qingting\src\components\gerenmain.vue
 -->
<template>
    <div class="gerenmain">
        <div class="login_before">
            <img src="../assets/default-avatar@2x.png" alt="">
            <div class="geren_login">
                <p>立即登录</p>
                <p>登录后同步您的收藏</p>
            </div>
        </div>
        <div class="login_after">
            <img src="../assets/default-avatar@2x.png" alt="">
            <div class="geren_login">
                <p>17865575032</p>
                <p>您当前未开通超级会员</p>
            </div>
        </div>
        <div class="qiaodao">
            <p><img src="../assets/gift.jpg" alt=""></p>
            <p>
                <span>签到有礼</span>
                <br>
                <span>赚积分</span>
            </p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.gerenmain{
    width: 92%;
    height: .93rem;
    display: flex;
    margin: .54rem auto 0;
    position: relative;
}
.login_before,.login_after{
    display: flex;
}
.login_after{
    display: none;
}
.gerenmain img{
    width: .64rem;
    height: .64rem;
}
.login_before img{
    margin-right: .14rem;
}
.login_after img{
    margin-right: .11rem;
}
.geren_login p:first-child{
    font-size: .17rem;
    color: #343434;
    font-weight: bold;
    margin-top: .15rem;
    margin-bottom: .05rem;
}
.geren_login p:last-child{
    font-size: .11rem;
    color: #b2b2b2;
}
.qiaodao{
    width: .92rem;
    height: .4rem;
    background: #fe5352;
    border-top-left-radius: .19rem;
    border-bottom-left-radius: .19rem;
    display: flex;
    position: absolute;
    right: -.15rem;
    top: .23rem;
}
.qiaodao p:first-child{
    width: .32rem;
    height: .32rem;
    border: 1px solid #fee5d3;
    border-radius: 50%;
    text-align: center;
    margin: 3px 3px 0 5px;
}
.qiaodao img{
    width: .2rem;
    height: .2rem;
    margin-top: 5px;
}
.qiaodao span:first-child{
    font-size: .12rem;
    color: #fffdfb;
}
.qiaodao span:last-child{
    font-size: .1rem;
    color: #fffdfb;
}
</style>