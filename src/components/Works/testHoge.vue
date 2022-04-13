<template>
  <div id="test1">
    <h1>Test!!</h1>

    <div class="frame">
      <img src="../../assets/img/test1.png">
      </div>
    <p>なんかまぁこんなかんじやでな</p>
  </div>
</template>

<script>
export default {
  name: "testHoge"
}
</script>

<style scoped>
img{
  object-fit: cover;
  width: 500px;
  height: 200px;
}
.frame {
  display: inline-block;
  position: relative;
}
.frame:after { /* この要素が内向きのシャドウを写真に落とす */
  position: absolute;
  display: block;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5),
  inset 0 0 100px rgba(0, 0, 0, 0.2);
}
</style>