import {createStore} from "vuex";


export default createStore({
    state:{
        right:'onamae',
        left:'menu',
        which:'left',
    },
    getters:{
        getRight: state => {
            return state.right
        },
        getLeft:state => {
            return state.left
        },
        getWhich: state =>{
            return state.which
        }
    }
    ,
    mutations:{
        setRight(state,payload){
            state.right = payload
            state.which = 'right'
        },
        setLeft(state,payload){
            state.left = payload
            state.which = 'left'
        },
        setWork(state,payload){
            state.left =payload+'Left'
            state.right = payload
            state.which = 'hoge'
        }
    },
    actions:{
    },
    modules:{

    }
})