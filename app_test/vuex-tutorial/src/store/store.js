import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 0
}

// A getter is a function that is used to access the objects from the store.
const getters = {
    fetchCount: state => state.count
}

// mutations are methods that perform modifications to the state of the store.
const mutations = {
    increment: state => state.count++,
    decrement: state => state.count--
}

// Actions are the methods that dispatch mutation functions.
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement')
}

export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})