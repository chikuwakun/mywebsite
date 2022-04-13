<template>
    <div class="container" :style="inputCssVars">
        <Left></Left>
        <Right></Right>
    </div>
</template>

<script>

    import Left from "@/components/Left";
import Right from "@/components/Right";
export default {
  name: 'App',
  components: {
      Left,
      Right,
  },
    data(){
      return{
          left:"0%"
      }
    }
  ,watch:{
        currentWhich(){
          if(this.left == "50%"){
            this.left = "0%"
            const elem = document.getElementById("Left");
            elem.style.color = "#FFFFFF"
            const elem2 = document.getElementById("Right");
            elem2.style.color = "#2a2c32"}
          else{
            this.left = "50%"
            const elem = document.getElementById("Right");
            elem.style.color = "#FFFFFF"

            const elem2 = document.getElementById("Left");
            elem2.style.color = "#2a2c32"
        }
    }}
    ,
    computed:{
        currentRight: function () {
            return this.$store.getters.getRight
        },
        currentLeft: function () {
            return this.$store.getters.getLeft
        },
      currentWhich: function (){
          return this.$store.getters.getWhich
      },
        inputCssVars(){
            return{
                '--hogehoge':this.left
            }
        }
    }
}
</script>

<style>

#app {

  font-family: aktiv-grotesk,sans-serif;
  font-weight: 200;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2a2c32;
    height: 100vh;
}
p {
  font-family: zen-maru-gothic,sans-serif;
  font-weight: 400;
  font-style: normal;
}

.container {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    height: 100vh;
}
    .container::before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left:var(--hogehoge);
        width: 50%;
        height: 100%;
        background-color: #2a2c32;
        transition:all ease-in-out 0.7s;
        z-index: -1;
    }
</style>
