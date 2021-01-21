import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
    namespaced: true,
    state:{
        newUser: null,
        token: null
    },
    getters:{},
    mutations:{},
    actions:{
        createAccount( {state},payload){
            state.newUser = payload
            axios.post('https://todoapp.pharmacopedia.store/register',null, {
                params: payload
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        },
        loginUser({state}, payload){
            axios.post('https://todoapp.pharmacopedia.store/login',null, {
                params: payload
            })
            .then(res => {
                state.token = res.data.api_token 
                console.log(state.token)
                localStorage.setItem('token', state.token)
                location.reload()

                
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
})