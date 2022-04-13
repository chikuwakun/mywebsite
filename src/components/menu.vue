<template>
    <div id="menu">
       <h1 @click="setRight('aboutMe')" > ABOUT</h1>
        <h1 @click="setRight('worksMe')">WORKS</h1>
        <h1 @click="setRight('contactMe')">CONTACT</h1>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Menu',
      methods:{
          setRight(h){
            this.$store.commit('setRight',h)
          }
      }
    }
</script>

<style scoped>
    #menu{
        align-items: flex-end;
        text-align: right;
    }
h1{
    margin: 0px;

}
</style>