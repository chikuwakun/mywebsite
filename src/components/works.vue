<template>
    <div id="Works">
      <h1>WORKS</h1>
      <h2>Web</h2>

      <h2>Photo</h2>
      <h2>etc</h2>
      <h3 @click="viewWork('testHoge')">test1</h3>
    </div>
</template>

<script>
    export default {
        name: "worksMe",
      data(){
      },
      methods:{
          viewWork:function (h) {
            this.$store.commit('setLeft',h)
          }
      }

    }
</script>

<style scoped>
.imgList{
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.imgList img {
  object-fit: cover;
  width: 100px;
  height: 100px;
}
</style>