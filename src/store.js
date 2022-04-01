import {createStore} from "vuex";


export default createStore({
    state:{
        right:'onamae',
        left:'menu'
    },
    getters:{
        getRight: state => {
            return state.right
        },
        getLeft:state => {
            return state.left
        }
    }
    ,
    mutations:{
        setRight(state,payload){
            state.right = payload
        },
        setLeft(state,payload){
            state.left = payload
        }
    },
    actions:{
    },
    modules:{

    }
})