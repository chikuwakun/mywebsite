<template>
    <div id="Left">
        <component id='leftContent'  v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
import onamae from "@/components/onamae";
    import Menu from "@/components/menu";
    import imageTest from "@/components/imageTest";
    import testHoge from "@/components/Works/testHoge";
    export default {
        name: "LeftContent",
        components:{Menu,
          onamae,
          imageTest,
          testHoge
        },
      watch:{
        currentComponent(values){
          console.log(values)
        }
      }
      ,
      computed:{
        currentComponent: function () {
          return this.$store.getters.getLeft
        }
      }
    }
</script>

<style scoped>
    #Left{float: left;
    color:#ffffff;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 8px;
        transition: color ease-in 0.3s;
    }
</style>

<style>
#Left{
  text-align: right;
}
</style>
