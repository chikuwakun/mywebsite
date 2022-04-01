<template>
    <div id="menu">
       <h1 @click="this.$store.state.right = 'aboutMe'">ABOUT</h1>
        <h1 @click="this.$store.state.right = 'worksMe'">WORKS</h1>
        <h1 @click="this.$store.state.right = 'contactMe'">CONTACT</h1>
    </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Menu',
        methods:{
            setAbout(){
                this.$store.commit('setRight')
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