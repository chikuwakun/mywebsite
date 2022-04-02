<template>
    <div id="Left">
        <component v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
    import Menu from "@/components/menu";

    export default {
        name: "LeftContent",
        components:{Menu,
        },
        data(){
            return{
                currentComponent:this.$store.state.left
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
