import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
    namespaced: true,
    state:{
        newUser: null,
        user: null,
        token: null,
        msg: ''
    },
    getters:{
        authenticated(state){
            return state.token && state.user
        },

        user(state){
            return state.user
        },
    },
    mutations:{
        setToken(state, token){
            state.token = token
        },
        setUser(state, data){
            state.user = data
        },
    },
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
        loginUser({dispatch, state}, payload){
            axios.post('https://todoapp.pharmacopedia.store/login',null, {
                params: payload
            })
            .then(res => {
                location.reload()
                return dispatch('attempt', res.data.api_token)

                
            })
            .catch(err => {
                console.log(err.message)
                state.msg = err.message

            })
        },
        attempt({commit, state}, token){
            if(token){
                commit('setToken', token)
            }
            if(!state.token){
                return
            }


            axios.get('https://todoapp.pharmacopedia.store/me')
            .then((response) => {
                commit('setUser', response.data)
            } )
            .catch((err) => {
                console.warn(err, "error")
                commit('setToken', null)
                commit('setUser', null)

            })
            

        }
    },
})
