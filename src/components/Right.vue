<template>
    <div id="Right">
        <component id = "rightContent" v-bind:is="currentComponent"></component>
    </div>
</template>

<script>
    import onamae from "@/components/onamae";
    import aboutMe from "@/components/about";
    import worksMe from "@/components/works";
    import contactMe from "@/components/contact";
    import testHoge from "@/components/Works/testHoge";
    // import About from "@/components/About";
    // import Contact from "@/components/Contact";
    // import Works from "@/components/Works";
    export default {
        name: "RightContent",
        watch:{
            currentComponent(values){
                console.log(values)
            }
        }
        ,
        computed:{
            currentComponent: function () {
                return this.$store.getters.getRight
            }
        },
        components:{
            onamae,
            aboutMe,
            worksMe,
          testHoge,
            contactMe
            /* eslint-disable */
        },
        methods:{
        }
    }
</script>

<style scoped>
    #Right{float: right;
        display: flex;
        align-items: center;
        padding-left: 8px;
        transition: color ease-in 0.3s;
    }



</style>
<style>
#Right{
  text-align:left;
}

</style>