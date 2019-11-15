<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
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
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
}
body{
  font-size: 14px;
  height: 100%;
   background:#f6f7f9;
}
#app { 
  margin-top: 5px;
}
ul,li{
  list-style: none;
}
a{
	text-decoration: none;
}

img{
	border:none;
	display: block;
}
.mint-cell-wrapper{
  background-image: none !important;
}

</style>
